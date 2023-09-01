import React from 'react';
import "./navbar.css";

function Main({ Data }) {
    return (
        <>
            <div className="main-div flex">
                {Data.map((element, key) => {
                    return (
                        <div className="box" key={key}>
                            <div className='id'>
                                <h2 className="heading">{element.foodName}</h2>
                                <p className="info">{element.description}</p>
                            </div>
                            <div className='imgfood'>
                                <img src={element.image} alt="food" className="imgoffood" />
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div style={{height:"40vh", width:"100vw"}}></div>
        </>

    )
}

export default Main;