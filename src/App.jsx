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

    if(!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut"
    })
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut"
    })
    gsap.to(".bg", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut"
    })
    gsap.to(".char", {
      scale: 0.7,
      x: "-50%",
      bottom: "-75%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut"
    })
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut"
    })

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
        <div className="main rotate-[-10deg] scale-[1.7] w-full">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
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
              <img className="sky w-full h-full object-cover absolute top-0 left-0 scale-[1.5] rotate-[-20deg]" src="./sky.png" alt="" />
              <img className="bg w-full h-full object-cover absolute top-0 left-0 scale-[1.8] rotate-[-3deg]" src="./bg.png" alt="" />
              <div className="text scale-[1.4] rotate-[-10deg] absolute top-0 left-[40%] text-white flex flex-col gap-3">
                <h1 className="text-9xl leading-none -ml-30">grand</h1>
                <h1 className="text-9xl leading-none ">theft</h1>
                <h1 className="text-9xl leading-none -ml-30">auto</h1>
              </div>
              <img className="char absolute -bottom-[200%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]" src="./girlbg.png" alt="" />

            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-7 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-3xl  ri-arrow-down-line" ></i>
                <h3 className="font-[Helvetica_Now-Display] text-xl" >Scroll Down</h3>
              </div>
              <img className=" h-[55px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./ps5.png" alt="" />

            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg w-1/2 relative h-full">
                <img className="absolute top-1/2 left-1/2 scale-[0.7] -translate-x-1/2 -translate-y-1/2" src="./imag.png" alt="" />
              </div>
              <div className="rg w-[40%]">
                <h1 className="text-5xl" >Still Running</h1>
                <h1 className="text-5xl" >Not Hunting</h1>
                <p className="mt-10 font-[Helvetica_Now_Display] text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus architecto nesciunt enim ex expedita illum ipsam magni, error saepe porro facilis numquam!</p>
                <p className="mt-3 font-[Helvetica_Now_Display] text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita nemo cupiditate magni facere illo perspiciatis veniam! Exercitationem </p>
                <p className="mt-5 font-[Helvetica_Now_Display] text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita nemo cupiditate magni facere illo perspiciatis veniam!  similique corporis quas libero doloribus quasi </p>
                <button className="bg-yellow-400 px-5 py-5 text-3xl text-black mt-7 cursor-pointer hover:bg-yellow-600 active:scale-[0.9]">Download Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
