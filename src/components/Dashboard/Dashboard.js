import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';

const Dashboard = () => {
    const [chartData, setChartData] = useChartData([]);
    console.log(chartData);
    return (
        <div className='mt-4 md:flex flex-wrap justify-around'>
            <div>
                <h1 className='text-center text-indigo-400 font-bold text-xl'>Month wise sell</h1>
                <LineChart
                    width={500}
                    height={350}
                    data={chartData}
                    margin={{
                        top: 5,
                        right: 2,
                        left: 30,
                        bottom: 0,
                    }} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="month" stroke="#82ca9d" />
                </LineChart>
            </div>

            <div>
                <h1 className='text-center text-indigo-400 font-bold text-xl'>Investment VS Revenue</h1>
                <AreaChart
                    width={500}
                    height={350}
                    data={chartData}
                    margin={{
                        top: 10,
                        right: 50,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="sell" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </div>
            <div className='mt-4'>
                <h1 className='text-center text-indigo-400 font-bold text-xl'>Investment VS Revenue</h1>
                <BarChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>
            <div className='mt-4'>
                <h1 className='text-start text-indigo-400 font-bold text-xl'>Investment VS Revenue</h1>
                <PieChart width={300} height={300}>
                    <Pie
                        dataKey="investment"
                        isAnimationActive={false}
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Pie dataKey="month" data={chartData} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;