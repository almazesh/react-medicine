import Main from './Main';
import { getBase } from './API/index';
import {  useState } from 'react';


function App() {
  const data = getBase().scheduleDays;
  const [route , setRoute] = useState('08 июня 2019')
  const dataLength = getBase().scheduleDays.length;
  const getDayId = (id) =>{
    setRoute(getBase().scheduleDays[id].caption)
  }
  return (
      <>
         <Main data={data}  dataLength={dataLength} route={route} getDayId={getDayId}/>
      </>
    );
}

export default App;
