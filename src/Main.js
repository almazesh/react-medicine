import './Main.scss'
import { useState } from 'react'
import Location from './Location';


const  Main = ({data}) => {
  const [route , setRoute] = useState('08 июня 2019')
  const [activeBtn , setActiveBtn] = useState(1)
  const dataDayLength = data.scheduleDays.length

  const moveStyleBtn = () =>{
    if(activeBtn !== dataDayLength){
       setActiveBtn(activeBtn + 1)
    }else if(activeBtn === dataDayLength){
       setActiveBtn(1)
    }
  }

  return (
      <>
        {/* TABS */}

        <div className="tabs_container">
            <div className="tabs_row">
                {
                  data.scheduleDays.map((item  ,index) => (
                    <button key={index}  className={activeBtn === index + 1 ? 'active' : 'unActive'} onClick={() =>{
                      setRoute(item.caption)
                      moveStyleBtn()
                    }}>{item.caption}</button>
                  ))
                }
            </div>
            <div className="tabs_active">
                  {route}
            </div>
            <Location route={route} data={data} />
            <div className="tabs_row_bottom">
                {
                  data.scheduleDays.map((item  ,index) => (
                    <button key={index}  className={activeBtn === index + 1 ? 'active' : 'unActive'} onClick={() =>{
                      setRoute(item.caption)
                      moveStyleBtn()
                    }}>{item.caption}</button>
                  ))
                }
            </div>
        </div>

      </>
    );
}

export default Main;
