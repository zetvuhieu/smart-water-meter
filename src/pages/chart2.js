import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './chart2.css';

const MonthlyChart = ({ data }) => {
    return (
        <ResponsiveContainer width={1400} height={400} className="monthly-chart-container">
            <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Usage" stroke="blue" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Amount" stroke="red" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default MonthlyChart;
