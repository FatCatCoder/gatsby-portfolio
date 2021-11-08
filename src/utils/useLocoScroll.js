import { useEffect } from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin";
import LocomotiveScroll from "locomotive-scroll";
import nativeSmoothScroll from './nativeSmoothScroll'
import {useStore} from '../store';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function useLocoScroll() {
  const scrollerObject = useStore(state => state.scrollerObject)
  const setScrollerObject = useStore(state => state.setScrollerObject)
  const isScrolling = useStore(state => state.isScrolling)
  const setIsScrolling = useStore(state => state.setIsScrolling)

  // document.addEventListener("touchmove", ()=>{
  //   setIsScrolling(true)
  // })
  // document.addEventListener("touchend", ()=>{
  //   setIsScrolling(false)
  // })

  if(nativeSmoothScroll){
  ScrollTrigger.addEventListener("scrollStart", () => {
    //console.log("scrolling started!")
    setIsScrolling(true)
  });

  ScrollTrigger.addEventListener("scrollEnd", () => {
    //console.log("scrolling ended!")
    setIsScrolling(false)
  });
}

  useEffect(() => {
    if(!nativeSmoothScroll()){
    console.log('new scroll trigger');
    const scrollEl = document.querySelector("#main-container");
    const scrollOptions = {el: scrollEl, smooth: true, getDirection: true, lerp: 0.08, multiplier: 1, smoothMobile: false, tablet: {smooth: false}, smartphone: {smooth: false}};
    let locoScroll = new LocomotiveScroll(scrollOptions);
    
    if(scrollerObject === ''){
      setScrollerObject(locoScroll)
    }

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.defaults({scroller: "#main-container"});

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },

      pinType: scrollEl.style.transform ? "transform" : "fixed"
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };
    const scrollStart = ()=>{setIsScrolling(true); console.log('scroll start', isScrolling);};
    const scrollEnd = ()=>{setIsScrolling(false); console.log('scroll end', isScrolling);};

    const scrollToPage = (e) => {
      e.preventDefault();
      locoScroll.scrollTo(e.target.getAttribute("to"));
    }

    gsap.utils.toArray(".nav-link").forEach(function(a) {
      a.addEventListener("click", function(e) {scrollToPage(e)});
    });

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.addEventListener("scrollStart", scrollStart);
    ScrollTrigger.addEventListener("scrollEnd", scrollEnd);
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        gsap.utils.toArray(".nav-link").forEach(function(a) {
          a.removeEventListener("click", function(e) {scrollToPage(e)});
        });
        locoScroll.destroy();
        locoScroll = null;
        console.log("Kill", locoScroll);
      }
    };
   }
  }, []);
}
