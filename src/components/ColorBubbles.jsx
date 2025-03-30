// src/components/ColorBubbles.jsx
import React from "react";

const ColorBubbles = () => {
    return (
        <div className="relative w-full h-full">
            <div className="absolute rounded-full opacity-70 bg-red-500 w-[90px] h-[90px] top-[120px] left-[215px]" />
            <div className="absolute rounded-full opacity-70 bg-green-400 w-[50px] h-[50px] top-[200px] left-[500px]" />
            <div className="absolute rounded-full opacity-70 bg-blue-400 w-[150px] h-[150px] top-[210px] left-[1050px]" />
            <div className="absolute rounded-full opacity-70 bg-pink-500 w-[99px] h-[99px] top-[260px] left-[290px]" />
            <div className="absolute rounded-full opacity-70 bg-cyan-400 w-[136px] h-[136px] top-[140px] left-[760px]" />
            <div className="absolute rounded-full opacity-70 bg-lime-400 w-[34px] h-[34px] top-[180px] left-[970px]" />
            <div className="absolute rounded-full opacity-70 bg-purple-600 w-[70px] h-[70px] top-[210px] left-[100px]" />
            <div className="absolute rounded-full opacity-70 bg-purple-600 w-[44px] h-[44px] top-[140px] left-[1240px]" />
            <div className="absolute rounded-full opacity-70 bg-yellow-400 w-[49px] h-[49px] top-[290px] left-[590px]" />
        </div>
    );
};

export default ColorBubbles;
