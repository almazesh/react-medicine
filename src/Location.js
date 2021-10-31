import './Location.scss'
import { useState } from 'react';


const Location = ({route , data}) =>{
    const scheduleLocations = data.scheduleDays;
    const [toggle , setToggle] = useState(null)
    const [multiToggle , setMultiToggle] = useState(null)

    const toggleCard = (index) =>{
        if(toggle === index){
            return setToggle(null)
        }else{
            setToggle(index)
        }
        
    }

    const multiToggleCard = (index) =>{
        if(multiToggle === index){
            return setMultiToggle(null)
        }else{
            setMultiToggle(index)
        }
        
    }
    return(
        <>
            <div className="location_card">
                {
                    route === '08 июня 2019' ? (
                        scheduleLocations[0].scheduleLocations.map((item, index) => (
                            <div>
                                <div key={item.id} className="location_card_head" onClick={() => {
                                    toggleCard(index)
                                } }>
                                    {item.caption}<span className={toggle === index ? 'caret open' : 'caret'}></span>
                                </div>

                                <div  className={toggle === index ? `location_card_body toggle` : 'location_card_body'}>
                                    {
                                        item.eventSessions.map((el , index) => (
                                            <div className={multiToggle === index ? 'card cardDrop' : 'card'} key={el.id}>
                                                <div>
                                                    <button>{el.timePeriod}</button>
                                                </div>
                                                <div className="right_el">
                                                    {
                                                        el.eventSessionModerators.length !== 0 ? (
                                                            <p onClick={() => multiToggleCard(index)}>{el.caption} <span className={multiToggle === index ? 'caret open' : 'caret'}></span></p>
                                                        ) : (
                                                            <p>{el.caption}</p>
                                                        )
                                                    }
                                                    <div className={multiToggle === index ? 'right_el_content drop' : 'right_el_content'}>
                                                        {
                                                            el.eventSessionModerators.length !== 0  ? (
                                                                <div className="right_card">
                                                                    <div className="experts">
                                                                        <b>Эксперты</b>
                                                                            {
                                                                                el.eventSessionModerators.map(data => (
                                                                                    <>
                                                                                        <div>{data.person.caption}</div>
                                                                                    </>
                                                                                )) 
                                                                            }
                                                                    </div>
                                                                {
                                                                    el.eventSessionItems.length !== 0 ? (
                                                                        <>
                                                                            {
                                                                                el.eventSessionItems.map(base =>{
                                                                                    console.log(base)

                                                                                    return(
                                                                                <div 
                                                                                    key={base.id}
                                                                                    className="speaker_card">
                                                                                    <div className="skills">
                                                                                        {base.duration}
                                                                                    </div>  
                                                                                    <div className="left_side">
                                                                                        <img src='https://siterscs.com/doctors/868356/images/thumb.jpg?state=9'/>
                                                                                    </div> 
                                                                                    <div className="right_side">
                                                                                        <div className="speaker_name">{base.speaker.caption}</div>
                                                                                        <div className="speaker_country">
                                                                                            <img src='https://siterscs.com/content/lp/conf2018/images/flags/063-japan.svg'/>
                                                                                            {base.speaker.countryName}
                                                                                        </div>
                                                                                        <div className='speaker_comment'>
                                                                                            {base.speaker.comment}
                                                                                        </div>
                                                                                        <div className="speaker_phrase">
                                                                                            {base.caption}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </>
                                                                    ) : <> </>
                                                                }
                                                                </div>
                                                            ) : (
                                                                <></>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    ) : (
                        scheduleLocations[1].scheduleLocations.map((item , index) => (
                            <div>
                                <div key={item.id} className="location_card_head" onClick={() => {
                                    toggleCard(index)
                                }}>
                                    {item.caption} <span className={toggle === index ? 'caret open' : 'caret'}></span>
                                </div>

                                <div className={toggle === index ? `location_card_body toggle` : 'location_card_body'}>
                                {
                                        item.eventSessions.map((el , index) => (
                                            <div className={multiToggle === index ? 'card cardDrop' : 'card'} key={el.id}>
                                                <div>
                                                    <button>{el.timePeriod}</button>
                                                </div>
                                                <div className="right_el">
                                                    {
                                                        el.eventSessionModerators.length !== 0 ? (
                                                            <p onClick={() => multiToggleCard(index)}>{el.caption} <span className={multiToggle === index ? 'caret open' : 'caret'}></span></p>
                                                        ) : (
                                                            <p>{el.caption}</p>
                                                        )
                                                    }
                                                    <div className={multiToggle === index ? 'right_el_content drop' : 'right_el_content'}>
                                                        {
                                                            el.eventSessionModerators.length !== 0  ? (
                                                                <div className="right_card">
                                                                    <div className="experts">
                                                                        <b>Эксперты</b>
                                                                            {
                                                                                el.eventSessionModerators.map(data => (
                                                                                    <>
                                                                                        <div>{data.person.caption}</div>
                                                                                    </>
                                                                                )) 
                                                                            }
                                                                    </div>
                                                                {
                                                                    el.eventSessionItems.length !== 0 ? (
                                                                        <>
                                                                            {
                                                                                el.eventSessionItems.map(base =>{
                                                                                    console.log(base)

                                                                                    return(
                                                                                <div 
                                                                                    key={base.id}
                                                                                    className="speaker_card">
                                                                                    <div className="skills">
                                                                                        {base.duration}
                                                                                    </div>  
                                                                                    <div className="left_side">
                                                                                        <img src='https://siterscs.com/doctors/868356/images/thumb.jpg?state=9'/>
                                                                                    </div> 
                                                                                    <div className="right_side">
                                                                                        <div className="speaker_name">{base.speaker.caption}</div>
                                                                                        <div className="speaker_country">
                                                                                            <img src='https://siterscs.com/content/lp/conf2018/images/flags/063-japan.svg'/>
                                                                                            {base.speaker.countryName}
                                                                                        </div>
                                                                                        <div className='speaker_comment'>
                                                                                            {base.speaker.comment}
                                                                                        </div>
                                                                                        <div className="speaker_phrase">
                                                                                            {base.caption}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </>
                                                                    ) : <> </>
                                                                }
                                                                </div>
                                                            ) : (
                                                                <></>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    ) 
                }
            </div>
        </>
    )
}

export default Location