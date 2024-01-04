export class SimulationResponse {
    filename: string;
    OneCycle: number;
    nrOfBranches: number;
    nrOfLoads: number;
    nrOfStores: number;
    Total: number;
    Ticks: number;
    IR: number;
    ICMiss: number;
    ICMissRate: number;
    DCMiss: number;
    DCMissRate: number;
    DCAccess: number;
    ICAccess: number;

    constructor(
        filename: string,
        OneCycle: number = 0,
        nrOfBranches: number = 0,
        nrOfLoads: number = 0,
        nrOfStores: number = 0,
        Total: number = 0,
        Ticks: number = 0,
        IR: number = 0,
        ICMiss: number = 0,
        ICMissRate: number = 0,
        DCMiss: number = 0,
        DCMissRate: number = 0,
        DCAccess: number = 0,
        ICAccess: number = 0
    ) {
        this.filename = filename;
        this.OneCycle = OneCycle;
        this.nrOfBranches = nrOfBranches;
        this.nrOfLoads = nrOfLoads;
        this.nrOfStores = nrOfStores;
        this.Total = Total;
        this.Ticks = Ticks;
        this.IR = IR;
        this.ICMiss = ICMiss;
        this.ICMissRate = ICMissRate;
        this.DCMiss = DCMiss;
        this.DCMissRate = DCMissRate;
        this.DCAccess = DCAccess;
        this.ICAccess = ICAccess;
    }
}
