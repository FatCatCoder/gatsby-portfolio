import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import nativeSmoothScroll from './nativeSmoothScroll'
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function useLocoScroll() {
  useEffect(() => {
    if(!nativeSmoothScroll()){
    console.log('new scroll trigger');
    const scrollEl = document.querySelector("#main-container");
    const scrollOptions = {el: scrollEl, smooth: true, getDirection: true, lerp: 0.075, multiplier: 1, smoothMobile: false, tablet: {smooth: false}, smartphone: {smooth: false}};
    let locoScroll = new LocomotiveScroll(scrollOptions);

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

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        locoScroll.destroy();
        locoScroll = null;
        console.log("Kill", locoScroll);
      }
    };
   }
  });
}
