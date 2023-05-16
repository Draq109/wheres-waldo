import { useState } from "react";

export default function DropdownMenu() {
    const [active,setActive] = useState(false);


    return (
        <div className="dropdown">
            <button className={active ? "dropdown-btn-active" : "dropdown-btn"} onClick={() => active ? setActive(false) : setActive(true)} >...</button>
            <div className={active ? "dropdown-content-active" : "dropdown-content"} onClick={() => active ? setActive(false) : setActive(true)}>
                <span className="character-1"><img />char1</span>
                <span className="character-2"><img />char2</span>
                <span className="character-3"><img />char3</span>
            </div>
        </div>
    )
}