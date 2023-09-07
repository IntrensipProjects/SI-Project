import './DashboardComponent.css';

import {useEffect, useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Number of interns/Internal supervisor',
    },
  },
};

const DashboardComponent =() => {
  const [data, setData] = useState({
    labels:['20','15', '10', '5', '0'],
    datasets: [
      {
        label: 'Dataset 1',
        data:[],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(25, 90, 13, 0.5)',
      },
      {
        label: 'Dataset 2',
        data:[],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  });

  useEffect(()=> {
    const fetchData= async()=> {
      const url = 'http://localhost:8888/STAGIAIRE-SERVICE/stagiaires'
      const labelSet = []
      const dataSet1 = [];
      const dataSet2 = [];
      await fetch(url).then((data)=> {
        console.log("Api data", data)
        const res = data.json();
        return res
      }).then((res) => {
        console.log("ressss", res)
        for (const val of res) {
          dataSet1.push(val.id);
          dataSet2.push(val.postId)
          // labelSet.push(val.name)
        }
        setData({
          labels:['20','15', '10', '5', '0'],
          datasets: [
            {
              label: 'Dataset ID',
              data:dataSet1,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(99, 132, 0.5)',
            },
            {
              label: 'Dataset ID2',
              data:dataSet2,
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 235, 0.5)',
            },
          ],
        })
        console.log("arrData", dataSet1, dataSet2)
      }).catch(e => {
        console.log("error", e)
      })
    }

    fetchData();
  },[])

  return(
    <div className="dashboard-container">

        {
          console.log("data", data)
        }
        <Bar className="dashboard" data={data} options={options}/>

    </div>
  )
}
export default DashboardComponent;