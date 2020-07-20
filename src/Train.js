import React from "react";
import  useWebAnimations  from '@wellyshen/use-web-animations';

function Train() {
  
      const {ref,getAnimation} = useWebAnimations({
            playbackRate: 0.1,
            autoPlay: true,
            keyframes: { 
              transform: ["translateX(600px)","translateX(-1450px)"] ,
            },
            timing: {
              duration: 700,
              iterations: Infinity,
              fill: "forwards"
            },
      })

      const play = () => {
        getAnimation().play();
      }

      const pause = () => {
        getAnimation().pause();
      }

      const reverse = () => {
        getAnimation().reverse();
      }

      return (
    <div style={{zIndex: "1",position:"relative"}} className="wrapper">
      <div className="container">
        <div className="moon"></div>
        <div className="cloud-container">
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>

        <div className="stars">
          <div className="star"></div> <div className="star"></div>{" "}
          <div className="star"></div> <div className="star"></div>{" "}
          <div className="star"></div> <div className="star"></div>{" "}
          <div className="star"></div>
        </div>
        <div className="mountain"></div>
        <div className="train-container">
          <div  ref={ref} className="train">
            <div  className="train-car head-car">
              <div className="windows">
                <div className="head-car-window"></div>
                <div className="w-left"></div>
                <div className="w-right"></div>
              </div>
              <div className="door"></div>
            </div>

            <div className="train-car">
              <div className="windows">
                <div className="w-left"></div>
                <div className="w-right"></div>
              </div>
              <div className="door"></div>
              <div className="windows">
                <div className="w-left"></div>
                <div className="w-right"></div>
              </div>
            </div>

            <div className="train-car">
              <div className="windows">
                <div className="w-left"></div>
                <div className="w-right"></div>
              </div>
              <div className="door"></div>
              <div className="windows">
                <div className="w-left"></div>
                <div className="w-right"></div>
              </div>
            </div>

            <div className="train-car">
              <div className="windows">
                <div className="w-left"></div>
                <div className="w-right"></div>
              </div>
              <div className="door"></div>
              <div className="windows">
                <div className="w-left"></div>
                <div className="w-right"></div>
              </div>
            </div>

            <div className="train-car">
              <div className="windows">
                <div className="w-left"></div>
                <div className="w-right"></div>
              </div>
              <div className="door"></div>
              <div className="windows">
                <div className="w-left"></div>
                <div className="w-right"></div>
              </div>
            </div>

            <div className="train-car end-car">
              <div className="door"></div>
              <div className="windows">
                <div className="w-left"></div>
                <div className="w-right"></div>
                <div className="end-car-window"></div>
              </div>
            </div>
          </div>
          
          <div className="train-track">
          <div style={{width: "20%", marginLeft: "200px"}}>
          <span onClick={play} style={{color: "#595055"}}><i className="fa-2x fas fa-play"></i></span>
          <span onClick={pause} style={{color: "#595055",marginLeft: "50px"}}><i className="fa-2x fas fa-pause"></i></span>
          <span onClick={reverse} style={{color: "#595055",marginLeft: "50px"}}><i className="fa-2x fas fa-directions"></i></span>
          </div>
            <div className="ledge"></div>
            <div className="pillar">
              <div className="pillar-left"></div>
              <div className="pillar-middle"></div>
              <div className="pillar-right"></div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Train;
