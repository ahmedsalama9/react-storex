import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import Hero1 from "../assets/hero1.png";
import Hero2 from "../assets/hero2.png";
import Hero3 from "../assets/hero3.png";
import Left from "../assets/left.svg";
import Right from "../assets/right.svg";
function Hero() {
    const [slider, setSlider] = useState(0);
    const images = [Hero1, Hero2, Hero3];
    //for auto slide every 3sec
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setSlider((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => {
            clearInterval(slideInterval);
        };
    }, [images.length]);
    //to perfom next function
    const nextSlider = () => {
        setSlider((prev) => (prev + 1) % images.length);
    };
    //to perfom preb function
    const prevSlider = () => {
        setSlider((prev) => (prev - 1 + images.length) % images.length);
    };
    return (_jsxs("section", { className: "mt-0", children: [_jsxs("div", { className: "absolute flex flex-row xl:top-1/2 lg:top-1/2 md:top-[30%] top-[30%] items-center justify-between xl:w-full lg:w-full w-fit px-3", children: [_jsx("img", { onClick: nextSlider, src: Left, alt: "arrow left", className: "bg-white hover:bg-[var(--theme-dark)]/70 rounded-full reative left-0 cursor-pointer hover:scale-105 transitio-ease duration-400" }), _jsx("img", { onClick: prevSlider, src: Right, alt: "arrow right", className: "bg-white hover:bg-[var(--theme-dark)]/70 rounded-full reative left-0 cursor-pointer hover:scale-105 transitio-ease duration-400" })] }), _jsx("div", { className: "flex flex-row", children: _jsx("img", { src: images[slider], className: "w-full lg:h-[800px] lg:object-cover object-contain" }) })] }));
}
export default Hero;
