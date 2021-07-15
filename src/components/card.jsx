import React from 'react';

const Card = (props) =>{
    return (
        <div className="card">
            <div className="image-segment" style={{backgroundImage:`url(${props.image})`}}>
            </div>
            <div className="text-segment">
            <h5>{props.date}</h5>
            <h4>{props.name}</h4>    
            <div className="filter-segment">
                {props.chips.map((value,index)=>{
                    return (
                        <p key={index}>
                            {value}
                        </p>
                    )
                })}
            </div>
            </div>                   
        </div>
    )
};
export default Card;