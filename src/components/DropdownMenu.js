import { useState } from "react";
import antman from "../images/antman.png"
import gwen from "../images/gwen.png"
import deadpool from "../images/deadpool.png"

export default function DropdownMenu() {
    const [active,setActive] = useState(false);


    return (
        <div className="dropdown">
            <button type="button" className={active ? "dropdown-btn-active" : "dropdown-btn"} onClick={() => active ? setActive(false) : setActive(true)} >...</button>
            <div className={active ? "dropdown-content-active" : "dropdown-content"} onClick={() => active ? setActive(false) : setActive(true)}>
                <img className="dropdown-gwen-icon" src={gwen} />
                <img className="dropdown-deadpool-icon" src={deadpool} />
                <img className="dropdown-antman-icon" src={antman} />
            </div>
        </div>
    )
}