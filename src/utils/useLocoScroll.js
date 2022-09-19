// import { useEffect } from "react";
// import {gsap} from "gsap";
// import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
// import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin";
// // import isMobile from './isMobile'
// import {useStore} from '../store';
// import LocomotiveScroll from "locomotive-scroll";

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// export default async function useLocoScroll() {
//   const scrollerObject = useStore(state => state.scrollerObject)
//   const setScrollerObject = useStore(state => state.setScrollerObject)
//   const setIsScrolling = useStore(state => state.setIsScrolling)

//   useEffect(() => {
//     if( typeof window !== `undefined`){
//       const scrollEl = document.querySelector("#___gatsby");

//       const scrollOptions = {
//         el: scrollEl, smooth: true, getDirection: true, 
//         lerp: 0.07, multiplier: 1, touchMultiplier: 2, 
//         smoothMobile: true, tablet: {smooth: true}, smartphone: {smooth: true}
//       };

//       let locoScroll = scrollerObject || new LocomotiveScroll(scrollOptions);
//       window.scroll = locoScroll;
      
//       if(scrollerObject === ''){
//         setScrollerObject(locoScroll)
//       }

//       locoScroll.on("scroll", ScrollTrigger.update);

//       ScrollTrigger.defaults({scroller: "#___gatsby"});

//       ScrollTrigger.scrollerProxy(scrollEl, {
//         scrollTop(value) {
//           if (locoScroll) {
//             return arguments.length
//               ? locoScroll.scrollTo(value, 0, 0)
//               : locoScroll.scroll.instance.scroll.y;
//           }
//           return null;
//         },
//         getBoundingClientRect() {
//           return {
//             top: 0,
//             left: 0,
//             width: window.innerWidth,
//             height: window.innerHeight
//           };
//         },

//         pinType: scrollEl.style.transform ? "transform" : "fixed"
//       });

//       const lsUpdate = () => {
//         if (locoScroll) {
//           locoScroll.update();
//         }
//       };
//       const scrollStart = ()=>{setIsScrolling(true)};
//       const scrollEnd = ()=>{setIsScrolling(false)};

//       const scrollToPage = (e) => {
//         e.preventDefault();
//         locoScroll.scrollTo(e.target.getAttribute("to"));
//       }

//       gsap.utils.toArray(".nav-link").forEach(function(a) {
//         a.addEventListener("click", function(e) {scrollToPage(e)});
//       });

//       ScrollTrigger.addEventListener("refresh", lsUpdate);
//       ScrollTrigger.addEventListener("scrollStart", scrollStart);
//       ScrollTrigger.addEventListener("scrollEnd", scrollEnd);
//       ScrollTrigger.refresh();

//       return () => {
//         if (locoScroll) {
//           ScrollTrigger.removeEventListener("refresh", lsUpdate);
//           gsap.utils.toArray(".nav-link").forEach(function(a) {
//             a.removeEventListener("click", function(e) {scrollToPage(e)});
//           });
//           locoScroll.destroy();
//           locoScroll = null;
//         }
//       };
//     }
//   }, []);
// }
