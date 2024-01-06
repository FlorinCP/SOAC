import {SimulationResponse} from "./simulationResponse.ts";

export type CacheSizeInfluenceDataPoint = {
    SIZE_IC: number;
    IR: number;
    RmissIC: number;
};

export type CacheSizeInfluenceChartProps = {
    dataArray: CacheSizeInfluenceDataPoint[];
};

export interface ChartViewParams {
    simulationResults: SimulationResponse;
    FR: number;
    IBS:number
}
