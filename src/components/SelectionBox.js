import React, { useState } from "react";
import antman from '../images/antman.png'
import gwen from '../images/gwen.png'
import deadpool from '../images/deadpool.png'
export default function SelectionBox() {
    return (
        <div className="background-overlay">
            <div className='selection-box'>
                <div className="characters-box">
                    <div className="gwen-box">
                        <img className="gwen-icon" src={gwen}></img>
                        <span className="description">Gwen Stacy<br/><br/><span className="difficulty">Difficulty: </span> <span className="dif-level">easy</span></span>
                    </div>
                    <div className="deadpool-box">
                        <img className="deadpool-icon" src={deadpool}></img>
                        <span className="description">Deadpool<br/><br/><span className="difficulty">Difficulty: </span> <span className="dif-level">medium</span></span>
                    </div>
                    <div className="antman-box">
                        <img className="antman-icon" src={antman}></img>
                        <span className="description">Ant-Man<br/><br/><span className="difficulty">Difficulty: </span> <span className="dif-level">hard</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}