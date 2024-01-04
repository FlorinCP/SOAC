import { simulationParams } from "../types/simulationParams";
import { SimulationResponse } from "../types/simulationResponse";
import { Simulation } from "../types/Simulation";

export async function getSimulationResponse(
  params: simulationParams,
  filename: string,
): Promise<SimulationResponse> {
  try {
    const simulation = await Simulation.createInstance(params, filename);

    return await simulation.runSimulation();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
