import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function MyComponent() {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        data: [150, 150, 80, 200, 160, 145, 190, 150, 176, 135, 156, 146, 126, 159, 160],
    };

    return (
        <LineChart
            width={1300}
            height={300}
            data={data.labels.map((label, index) => ({ label, LuuLuongNuoc: data.data[index] }))}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis label={{ value: 'luu luong nuoc', angle: -90, potision: 'outsideRight' }} domain={[0, 250]} />
            {/* <YAxis label={{ value: "Lượng nước tiêu thụ (m3)", angle: -90, position: "insideLeft" }} domain={[0, maxValue]} /> */}
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="LuuLuongNuoc" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    );
}

export default MyComponent;
