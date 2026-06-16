import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { useState } from "react"
import 'remixicon/fonts/remixicon.css'

function App() {

  const [showContent, setShowContent] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%"
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= .9) {
            document.querySelector(".svg").remove()
            setShowContent(true)
            this.kill()
          }
        }
      })
  })

  useGSAP(() => {
    const main = document.querySelector('.main')
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`
      })
      gsap.to(".sky", {
        x: xMove
      })
      gsap.to(".bg", {
        x: xMove * 1.7
      })
    })
  }, [showContent])

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-100 w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full">
          <div className="landing w-full h-screen bg-black">
            <div className="navbar w-full py-3 px-10 absolute top-0 left-0 z-[10]">
              <div className="logo flex gap-5">
                <div className="lines flex flex-col gap-[7px]">
                  <div className="line w-12 h-1 bg-white"></div>
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                </div>
                <h3 className="text-3xl text-white -mt-[5px] leading-none" >RockStar</h3>
              </div>
            </div>
            <div className="imagesdiv relative w-full overflow-hidden h-screen">
              <img className="sky w-full h-full object-cover absolute top-0 left-0 scale-[1.2]" src="./sky.png" alt="" />
              <img className="bg w-full h-full object-cover absolute top-0 left-0 scale-[1.1]" src="./bg.png" alt="" />
              <div className="text absolute top-0 left-1/2 -translate-x-1/2 text-white flex flex-col gap-3">
                <h1 className="text-9xl leading-none -ml-30">grand</h1>
                <h1 className="text-9xl leading-none ">theft</h1>
                <h1 className="text-9xl leading-none -ml-30">auto</h1>
              </div>
              <img className="char absolute -bottom-[75%] left-1/2 -translate-x-1/2 scale-[0.7]" src="./girlbg.png" alt="" />

            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-7 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-3xl  ri-arrow-down-line" ></i>
                <h3 className="font-[Helvetica_Now-Display] text-xl" >Scroll Down</h3>
              </div>
              <img className=" h-[55px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./ps5.png" alt="" />

            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
