import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {CacheSizeInfluenceChartProps} from "../../types/CacheSizeInfluenceDataPoint .ts";

export const CacheSizeInfluenceChart: React.FC<CacheSizeInfluenceChartProps> = ({ dataArray }) => (
    <BarChart width={600} height={300} data={dataArray}
              margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="SIZE_IC" name="Instruction Cache Size (SIZE_IC)"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="FR" name="(FR)" fill="rgb(238, 49, 88)" />
        <Bar dataKey="IR" name="Processing Rate (IR)" fill="#8884d8" />
        <Bar dataKey="RmissIC" name="Instruction Cache Miss Rate (RmissIC)" fill="#82ca9d" />
    </BarChart>
);
