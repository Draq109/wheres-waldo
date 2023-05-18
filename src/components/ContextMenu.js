import React, { useEffect, useState } from "react"

function ContextMenu({ menu }) {
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const [showMenu, setShowMenu] = useState(false);


    function handleContextMenu(event) {
        event.preventDefault();
        setPosX(event.pageX + "px");
        setPosY(event.pageY + "px");
        setShowMenu(true);
        console.log(posX);
    }

    function handleClick() {
        setShowMenu(false);
    }


    useEffect(() => {
        const marvelImage = document.getElementsByClassName("marvel-image");
        marvelImage[0].addEventListener("contextmenu", handleContextMenu);
        marvelImage[0].addEventListener("click", handleClick);
        return () => {
            marvelImage[0].removeEventListener("click", handleClick);
            marvelImage[0].removeEventListener("contextmenu", handleContextMenu);
        }
    }, [])

    return (<>
        {showMenu ?
            <div className="context-menu"
                style={{
                    top: posY,
                    left: posX,
                }}>
                <li>Ghost-Spider</li>
                <li>Deadpool</li>
                <li>Ant-Man</li>
            </div> : <></>}
    </>
    )
}

export default ContextMenu