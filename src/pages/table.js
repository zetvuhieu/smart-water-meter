import React from 'react';
import './table.css';

class TableWater extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { month: 'Tháng 1', amount: '5', price: '50,000 vnd' },
                { month: 'Tháng 2', amount: '7', price: '70,000 vnd' },
                { month: 'Tháng 3', amount: '3', price: '30,000 vnd' },
                { month: 'Tháng 4', amount: '7', price: '70,000 vnd' },
                { month: 'Tháng 5', amount: '6', price: '60,000 vnd' },
                { month: 'Tháng 6', amount: '8', price: '80,000 vnd' },
                { month: 'Tháng 7', amount: '8', price: '80,000 vnd' },
                { month: 'Tháng 8', amount: '6', price: '60,000 vnd' },
                { month: 'Tháng 9', amount: '7', price: '70,000 vnd' },
                { month: 'Tháng 10', amount: '5', price: '50,000 vnd' },
                { month: 'Tháng 11', amount: '7', price: '70,000 vnd' },
                { month: 'Tháng 12', amount: '9', price: '90,000 vnd' },
            ],
        };
    }

    render() {
        return (
            <div className="table-container">
                <div className="table_heading">
                    <h2>STATISTICAL</h2>
                </div>
                <table>
                    <thead className="table-head">
                        <tr>
                            <th className="month">Tháng</th>
                            <th className="m3">Số mét khối nước tiêu thụ</th>
                            <th className="price">Số tiền phải thanh toán</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {this.state.data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.month}</td>
                                <td>{item.amount}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableWater;
