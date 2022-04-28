import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ReactChart = (props) => {
    const chartEl = useRef();
    const chartInstance = useRef();

    useEffect(() => {
        chartInstance.current = new Chart(chartEl.current, {
            type: props.type,
            data: props.data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            }
        });

        return () => chartInstance.current.destroy();
    }, [props.type, props.data]);

    return (
        <div>
            <canvas ref={chartEl} width="400px" height="400px"></canvas>
        </div>
    );
};

export default ReactChart;
