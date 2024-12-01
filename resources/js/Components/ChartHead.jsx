import React from 'react';
import ChartChlank from './ChartChlank';

const Dashboard = () => {
    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Влияние производственых травм на мужскую смертность',
            },
        },
    };

    return (
            <div className="p-6 bg-gray-100">
                <h1 className="text-2xl font-bold mb-4">График</h1>
                <div className="bg-white p-4 rounded-lg shadow">
                    <ChartChlank data={chartData} options={chartOptions} />
                </div>
            </div>
    );
};

export default Dashboard;
