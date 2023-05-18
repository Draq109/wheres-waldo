import React, { useEffect, useState } from 'react';
import marvelImage from '../images/marvel.webp';

export default function GameImage() {
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const [pause, setPause] = useState(false);


    function handleRightClick(event) {
        event.preventDefault();
        setPause(true);
        setPosX(event.pageX + "px");
        setPosY(event.pageY + "px");
    }
    function handleLeftClick(event) {
        setPause(false);
        setPosX(event.pageX + "px");
        setPosY(event.pageY + "px");
    }
    function mouseMove(event) {
        setPosX(event.pageX + "px");
        setPosY(event.pageY + "px");
    }

    useEffect(() => {
        const marvelElement = document.getElementsByClassName("marvel-image");
        if (pause === true) {
            marvelElement[0].addEventListener("contextmenu", handleRightClick);
            marvelElement[0].addEventListener("click", handleLeftClick);
            marvelElement[0].removeEventListener("mousemove", mouseMove);
        } else {
            marvelElement[0].addEventListener("contextmenu", handleRightClick);
            marvelElement[0].addEventListener("click", handleLeftClick);
            marvelElement[0].addEventListener("mousemove", mouseMove);
        }

        return () => {
            marvelElement[0].removeEventListener("click", handleLeftClick);
            marvelElement[0].removeEventListener("contextmenu", handleRightClick);
            marvelElement[0].removeEventListener("mousemove", mouseMove);
        }
    }, [pause])

    return (
        <>
            <div className="rounded-cursor" style={{
                top: posY,
                left: posX
            }}>
                </div>
            <div className="point-cursor" style={{
                top: posY,
                left: posX
            }}></div>
            <img src={marvelImage} className="marvel-image" style={pause ? {cursor:"auto"}:{}}></img>
        </>
    )
}