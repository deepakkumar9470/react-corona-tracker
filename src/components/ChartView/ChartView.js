import React,{useState ,useEffect} from 'react'
import {fetchTotalConfirmed} from '../../api';
import styles from './ChartView.module.css';
import {Pie} from 'react-chartjs-2';

const ChartView = ({data: {TotalConfirmed,TotalDeaths,TotalRecovered}, country}) => {
  const [totalConfirmed ,settotalConfirmed] = useState([]);
  

  useEffect(()=>{
     const fetchAPI= async()=>{
         settotalConfirmed(await fetchTotalConfirmed());
     }  
     
      fetchAPI();
   },[]);

// For Charts Line & Bar

const pieChart= (
  totalConfirmed.length?
  (<Pie 
    data= {{
      labels: totalConfirmed.map(({TotalConfirmed})=>TotalConfirmed),
       
      datasets:[{
       data:totalConfirmed.map(({TotalConfirmed})=>TotalConfirmed),
       label:"TotalConfirmed",
       borderColor:"#3333ff",
       fill:true,
      } ,{
        data:totalConfirmed.map(({TotalDeaths})=>TotalDeaths),
        label:"TotalDeaths",
        borderColor:"red",
        backgroundColor:"rgba(255,0,0,0.5)",
        fill:true,
       },{
        data:totalConfirmed.map(({TotalRecovered})=>TotalRecovered),
        label:"TotalRecovered",
        borderColor:"green",
        backgroundColor:"rgba(255,0,0,0.5)",
        fill:true,
       }],
       
       
     }}/>):null
);

// For Bar Charts
// console.log(confirmed, recovered, deaths);
// const barChart=(
//    confirmed?
//    (
//      <Bar
//       data= {{
//         labels:['Infected','Recovered','Deaths'],
//         datasets:[{
//           label:'People',
//           backgroundColor:[
//             'rgba(0,0,255,0.5)',
//             'rgba(0,255,0,0.5)',
//             'rgba(255,0,0,0.5)', 
//           ],
//           data: [confirmed.value, recovered.value, deaths.value]
//         }]
//       }}

//       options={{
//         legend: {display:false},
//         title:{display:true, text:`Current state is ${country}`},

//       }}
//     />
//     ) : null
// );



    return (
        <div className={styles.container}>
         {
           country ? pieChart :'Data not found..'
         }
        </div>
    );
}

export default ChartView;
