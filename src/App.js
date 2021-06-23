import React, { Component } from 'react'
import './App.module.css';
import styles from './App.module.css';
import coronaimage from './images/covid19.png';
import { fetchData } from './api';
import {Cards, ChartView, NavBar ,Footer} from './components';
 class App extends Component {
 state={
   data:{},
   country:'', 
 }
async componentDidMount(){
  const apiData=await fetchData();
  this.setState({data:apiData});
  // console.log(apiData);
}


  render() {

    const {data,country} = this.state;
    return (
      <div className={styles.container}>
        <NavBar/>
        <img className={styles.myimage} src={coronaimage} alt="COVID-19"/>
        
        <Cards data={data}/>
       
        <ChartView data={data} country={country}/>
        <Footer/>
      </div>
      
    )
  }
}
export default App;