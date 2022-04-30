import React, {useEffect, useState} from 'react';
import ChartDataForm from "./ChartDataForm";
import TypeSwitcher from "./TypeSwitcher";
import ReactChart from "./Components/ReactChart";


export default function App() {
  const defaultLabels = ['January', 'February', 'March', 'April', 'May'];
  const defaultQuantity = [1, 5, 10, 1, 2];

  const [dynamicData, setDynamicData] = useState({
    labels: defaultLabels,
    quantity: defaultQuantity
  });

  const [type, setType] = useState('bar');

  const chartTypes = [
    {type:'bar', name:'Bar Chart'},
    {type:'line', name:'Line Chart'},
    {type:'doughnut', name:'Doughnut Chart'},
    {type:'radar', name:'Radar Chart'}
  ];

  const dataSetDefaults = {
    label: 'Value',
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
  };

  const [data, setData] = useState({
    labels: defaultLabels,
    datasets: [{
      ...dataSetDefaults,
      data: defaultQuantity,
    }]
  });

  useEffect(() => {
    setData({
      labels: dynamicData.labels,
      datasets: [{
        ...dataSetDefaults,
        data: dynamicData.quantity,
      }]
    })
  }, [dynamicData]);

  return (
      <div className="container my-5">
          <div className="row justify-content-center">
              <div className="col col-md-8">
                  <div className="card">
                      <div className="card-body">
                          <ChartDataForm
                              defaultLabels={defaultLabels}
                              setDynamicData={setDynamicData}
                              defaultQuantity={defaultQuantity}
                          />

                          <ReactChart type={type} data={data}/>

                          <TypeSwitcher
                              chartTypes={chartTypes}
                              type={type}
                              setType={setType}
                          />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
