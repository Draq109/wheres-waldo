import React, { useState } from "react";
import antman from '../images/antman.png';
import gwen from '../images/gwen.png';
import deadpool from '../images/deadpool.png';
import marvelPic from '../images/marvel.webp';
export default function SelectionBox({toggleActive, pauseTime, active}) {
    return (
        <div className={active ? "background-overlay" : "background-overlay-active"}>
            <div className={active ? "selection-box" : "selection-box-active"}>
                <div className="selection-box-flex">
                    <img src={marvelPic} className="marvel-pic-box"></img>
                    <div className="characters-box">
                        <div className="gwen-box">
                            <img className="gwen-icon" src={gwen}></img>
                            <span className="description">Ghost-Spider<br /><br /><span className="difficulty">Difficulty: </span> <span className="dif-level">easy</span></span>
                        </div>
                        <div className="deadpool-box">
                            <img className="deadpool-icon" src={deadpool}></img>
                            <span className="description">Deadpool<br /><br /><span className="difficulty">Difficulty: </span> <span className="dif-level">medium</span></span>
                        </div>
                        <div className="antman-box">
                            <img className="antman-icon" src={antman}></img>
                            <span className="description">Ant-Man<br /><br /><span className="difficulty">Difficulty: </span> <span className="dif-level">hard</span></span>
                        </div>
                        <button type="button" className="start-btn bttn-gradient bttn-success bttn-lg" onClick={() => {
                            pauseTime();
                            toggleActive();
                            }}>Start</button>
                    </div>
                </div>
            </div>
        </div>
    );
}