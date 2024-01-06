export type PrefetchBufferInfluenceDataPoint = {
    IBS: number;       // X-axis: Prefetch Buffer Size
    IR: number;        // Y-axis: Processing Rate
    IBE: number;       // Y-axis: Instruction Buffer Empty Percentage
};

export type PrefetchBufferInfluenceChartProps = {
    dataArray: PrefetchBufferInfluenceDataPoint[];
};
