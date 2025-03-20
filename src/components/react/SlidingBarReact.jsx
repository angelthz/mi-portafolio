import { useEffect, useRef, useState } from "react";
import HomeIcon from '../../assets/svg/home.svg';
import { SvgIcon } from "./SvgIcon";

const routes=["/","/about/","/projects/","/notes/"];

export const SlidingBarReact = ({currentPath})=>{
    const [translate, setTranslate] = useState(0);
    const sliderCircle = useRef();
    const sliderContainer = useRef();

    useEffect(()=>{
        let distance = routes.indexOf(currentPath) * 100;
        setTranslate(distance);
    },[currentPath]);

    const animateSlider = () => {
        sliderCircle.current.classList.remove("animate-jelly")
        sliderCircle.current.offsetWidth;
        sliderCircle.current.classList.add("animate-jelly")
    }

    const handleOver = (e) => {
        animateSlider();
        sliderContainer.current.style.transform = `translateX(${e.target.dataset.trans}%)`;
    }
    
    const handleOut = () =>{ 
        animateSlider();
        sliderContainer.current.style.transform = `translateX(${translate}%)`;
    }

    return (
        <nav className="navbar">
            <ul className="navbar-content" >
                <li>
                    <a href="/" className="react-link" data-trans={0} onMouseOver={e=>handleOver(e)} onMouseOut={e=>handleOut(e)}>
                        <SvgIcon name="home" className={currentPath==="/"?"active-icon":"inactive-icon"}></SvgIcon>
                    </a>
                </li>
                <li>
                    <a href="/about/" className="react-link" data-trans={100}  onMouseOver={e=>handleOver(e)} onMouseOut={e=>handleOut(e)}>
                        <SvgIcon name="about" className={currentPath==="/about/"?"active-icon":"inactive-icon"}></SvgIcon>
                    </a>
                    </li>
                <li>
                    <a href="/projects/" className="react-link" data-trans={200}  onMouseOver={e=>handleOver(e)} onMouseOut={e=>handleOut(e)}>
                        <SvgIcon name="projects" className={currentPath==="/projects/"?"active-icon":"inactive-icon"}></SvgIcon>
                    </a>
                </li>
                <li>
                    <a href="/notes/" className="react-link" data-trans={300}  onMouseOver={e=>handleOver(e)} onMouseOut={e=>handleOut(e)}>
                        <SvgIcon name="notes" className={currentPath==="/notes/"?"active-icon":"inactive-icon"}></SvgIcon>
                    </a>
                </li>
            </ul>
            <div ref={sliderContainer} className="nav-slider" style={{transform:`translateX(${translate}%)`}}>
                <div ref={sliderCircle} className="nav-slider-circle">&nbsp;</div>
            </div>
        </nav>
    )
}