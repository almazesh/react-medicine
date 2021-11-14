import './Main.scss'
import { useState } from 'react'
import Location from './Location';


const  Main = ({data ,route, getDayId , dataLength}) => {
  const [activeBtn , setActiveBtn] = useState(1)

  const moveStyleBtn = () =>{
    if(activeBtn !== dataLength){
       setActiveBtn(activeBtn + 1)
    }else if(activeBtn === dataLength){
       setActiveBtn(1)
    }
  }
  
  return (
      <>
        {/* TABS */}

        <div className="tabs_container">
            <div className="tabs_row">
                {
                  data.map((item  ,index) => (
                    <button key={index}  className={activeBtn === index + 1 ? 'active' : 'unActive'} onClick={() =>{
                      moveStyleBtn()
                      getDayId(index)
                    }}>{item.caption}</button>
                  ))
                }
            </div>
            <div className="tabs_active">
                  {route}
            </div>
             
            <div className="tabs_row_bottom">
                {
                  data.map((item  ,index) => (
                    <button key={index}  className={activeBtn === index + 1 ? 'active' : 'unActive'} onClick={() =>{
                      moveStyleBtn()
                      getDayId(index)

                    }}>{item.caption}</button>
                  ))
                }
            </div>
        </div>
      </>
    );
}

export default Main;
