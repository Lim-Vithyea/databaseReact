// src/components/StudentChart.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

function StudentChart() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    fetch('http://localhost:3001/api/tblstudent')
      .then((response) => response.json())
      .then((data) => {
        const genderCounts = data.reduce((acc, tblstudent) => {
          acc[tblstudent.gender] = (acc[tblstudent.gender] || 0) + 1;
          return acc;
        }, {});
        const labels = Object.keys(genderCounts);
        const dataset = Object.values(genderCounts);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: '',
              data: dataset,
              backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(153, 102, 255, 0.2)'],
              borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(153, 102, 255, 1)'],
              borderWidth: 1
            }
          ]
        });
      });
  }, []);

  return (
    <div>
      <h2 className='text-center font-bold text-blue-500 text-2xl pt-[20px]'>Student Gender Distribution</h2>
      <Bar data={chartData}/>
    </div>
  );
}

export default StudentChart;
