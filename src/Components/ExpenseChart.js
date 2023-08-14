import React, { useContext, useEffect, useRef, useState, useCallback } from 'react';
import { userContext } from '../Context/MyContext';
import Chart from 'chart.js/auto';
import Button from 'react-bootstrap/Button';

function ExpenseChart() {
  const { transactions } = useContext(userContext);
  const chartRef = useRef(null);
  const [showChart, setShowChart] = useState(false);
  const chartInstance = useRef(null);

  const renderChart = useCallback(() => {
    const incomeTransactions = transactions.filter((transaction) => transaction.price > 0);
    const labels = incomeTransactions.map((transaction) => transaction.day);
    const data = incomeTransactions.map((transaction) => transaction.price);
    

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Income',
            data,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [transactions]);

  useEffect(() => {
    if (showChart) {
      renderChart();
    }
  }, [showChart, renderChart]);

  const handleShowChart = () => {
    setShowChart(!showChart);
  };

  return (
    <div className='chart'>
    <Button variant="primary" onClick={handleShowChart}>
    {showChart ? 'Hide Chart' : 'Show Chart'}
    </Button>      
    {showChart && <canvas ref={chartRef} />}
    </div>
  );
}

export default ExpenseChart;
