import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './chart.css';

const MonthlyChart = ({ data }) => {
    return (
        <div className="chart-container">
            <div className="chart-wrapper">
                <BarChart
                    width={1500}
                    height={400}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    className="monthly-chart"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" label={{ value: 'Đơn vị: M3', angle: -90, position: 'insideLeft' }} />
                    <YAxis
                        yAxisId="right"
                        label={{ value: 'Đơn vị: nghìn VND', angle: -90, position: 'insideRight' }}
                        labelOffset={20}
                        orientation="right"
                    />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="usage" fill="#2196f3" />
                    <Bar yAxisId="right" dataKey="amount" fill="#ef4e49" />
                </BarChart>
            </div>
        </div>
    );
};

export default MonthlyChart;
