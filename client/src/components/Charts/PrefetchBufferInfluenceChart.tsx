import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {PrefetchBufferInfluenceChartProps} from "../../types/PrefetchBufferInfluenceDataPoint .ts";

export const PrefetchBufferInfluenceChart: React.FC<PrefetchBufferInfluenceChartProps> = ({ dataArray }) => (
    <BarChart width={600} height={300} data={dataArray}
              margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="IBS" name="Prefetch Buffer Size (IBS)"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="IR" name="Processing Rate (IR)" fill="#8884d8" />
        <Bar dataKey="IBE" name="Instruction Buffer Empty (IBE)" fill="#82ca9d" />
    </BarChart>
);
