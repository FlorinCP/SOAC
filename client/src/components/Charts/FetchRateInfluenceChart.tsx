import {
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend, BarChart, Bar,
} from "recharts";
import React from "react";

export type DataPoint = {
    FR: number;
    IR: number;
    ICMissRate: number;
    DCMissRate: number;
};

type FetchRateInfluenceChartProps = {
    dataArray: DataPoint[];
};


const FetchRateInfluenceChart: React.FC<FetchRateInfluenceChartProps> = ({ dataArray }) => (
    <BarChart width={600} height={300} data={dataArray}
              margin={{ top: 20, right: 30, left: 20, bottom: 0 }}

    >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="FR" name="(FR)" fill="rgb(238, 49, 88)" />
        <Bar dataKey="IR" name="Processing Rate (IR)" fill="#8884d8" />
        <Bar dataKey="DCMissRate" name="Data Cache Miss Rate (RmissDC)" fill="#ffc658" />
        <Bar dataKey="ICMissRate" name="Instruction Cache Miss Rate (RmissIC)" fill="#82ca9d" />
    </BarChart>
);

export default FetchRateInfluenceChart;

