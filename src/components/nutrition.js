import React, {useState }from 'react';

export default function Nutrition({data}) {
    let [hover, setHover] = useState(false);
    const nutritionInfo = data.bad ? data.bad.concat(data.good[0]):[];
    console.log( nutritionInfo)
    return (
        <div className='nutritionInfo'>
            {nutritionInfo.map(i => 
                <div className='nutritionItem'><div className='nutritionItem-title'> {i.title}<br></br>{i.amount} </div>
                    <span onMouseOver={() => { setHover(true) }} onMouseOut={()=>{setHover(false)}}  className={'bar'} 
                        style={{'width':`${i.percentOfDailyNeeds*1.5}%`,'backgroundColor':'rgba(248, 148, 6, 1)','display':'inline-block',height:'20px'}}>
                        {i.percentOfDailyNeeds}%
                    </span> 
                </div>)}
        </div>
    )
}
