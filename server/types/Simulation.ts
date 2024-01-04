import {simulationParams} from "./simulationParams";
import {Instruction} from "./Instruction";
import {SimulationResponse} from "./simulationResponse";
import {totalInstructions} from "./totalInstructions";
import readFile from "../functions/readFile";

export class Simulation {
    private DataCache: number[];
    private InstrCache: number[];
    private ICAccess: number = 0;
    private ICMiss: number = 0;
    private DCAccess: number = 0;
    private DCMiss: number = 0;
    private params: simulationParams;
    private instructionsList!: Instruction[];
    private filename: string;

    private constructor(params: simulationParams,filename:string) {
        this.params = params;
        this.filename = filename
        this.DataCache = new Array(params.Size_DC).fill("");
        this.InstrCache = new Array(params.Size_IC).fill("");
    }

    static async createInstance(params: simulationParams,filename:string): Promise<Simulation> {
        const simulation = new Simulation(params,filename);
        simulation.instructionsList = await simulation.loadInstructions(simulation.filename); // Load the instructions list
        return simulation;
    }

    private async loadInstructions(filename: string): Promise<Instruction[]> {
        return readFile(filename);
    }

    private DataCacheAdd(instruction: Instruction): void {
        const isCacheHit = this.DataCache.includes(instruction.dataAddress);
        if (isCacheHit) {
            this.DCAccess++;
            return;
        }

        this.DCMiss++;
        if (this.DataCache.length >= this.params.Size_DC / this.params.BS_DC) {
            this.DataCache.shift();
        }
        this.DataCache.push(instruction.dataAddress);
    }

    private InstrCacheAdd(instruction: Instruction): void {
        const isCacheHit = this.InstrCache.includes(instruction.icAddress);
        if (isCacheHit) {
            this.ICAccess++;
            return;
        }

        this.ICMiss++;
        if (this.InstrCache.length >= this.params.Size_IC / this.params.BS_IC) {
            this.InstrCache.shift();
        }
        this.InstrCache.push(instruction.icAddress);
    }

    public async runSimulation(): Promise<SimulationResponse> {
        let nrOfBranches = 0;
        let nrOfLoads = 0;
        let nrOfStores = 0;

        this.instructionsList.forEach((instruction) => {
            switch (instruction.type) {
                case "B":
                    nrOfBranches++;
                    this.InstrCacheAdd(instruction);
                    break;
                case "L":
                    nrOfLoads++;
                    this.DataCacheAdd(instruction);
                    this.InstrCacheAdd(instruction);
                    break;
                case "S":
                    nrOfStores++;
                    this.DataCacheAdd(instruction);
                    this.InstrCacheAdd(instruction);
                    break;
            }
        });

        const totalInstructionsCount: number = totalInstructions[this.filename];
        const oneCycle: number =
            totalInstructionsCount - nrOfBranches - nrOfLoads - nrOfStores;
        const BSL = nrOfStores + nrOfLoads + nrOfBranches;

        const temp: number = BSL / this.params.FR;
        const temp2: number = BSL / this.params.IRMax;
        const ticks =
            temp * this.params.Latency +
            temp2 * this.params.Latency +
            this.DCMiss +
            this.ICMiss * this.params.Latency;
        const IR = totalInstructionsCount / ticks;
        const ICMissRate = (this.ICMiss * 100) / BSL;
        const DCMissRate = (this.DCMiss * 100) / BSL;

        return  new SimulationResponse(
            oneCycle,
            nrOfBranches,
            nrOfLoads,
            nrOfStores,
            totalInstructionsCount,
            ticks,
            IR,
            this.ICMiss,
            ICMissRate,
            this.DCMiss,
            DCMissRate,
            this.DCAccess,
            this.ICAccess
        )

    }
}
