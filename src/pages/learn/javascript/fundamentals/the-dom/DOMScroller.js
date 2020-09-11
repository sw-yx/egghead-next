import React, {useRef, useState, useEffect} from 'react'
import {gsap} from 'gsap'
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

export default function DOMScroller() {
  const imageRef = useRef(null)
  // const [image, setImage] = useState('')

  useEffect(() => {
    const timeline = gsap.timeline({
      repeat: 5,
      // scrollTrigger: {
      //     trigger: '.triggerElement',
      //     scrub: true
      // }
    })

    timeline
      .to([imageRef.current], {
        attr: {
          src:
            'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599812699/egghead-next-ebombs/wtf-DOM/dom-2.png',
        },
        duration: 2,
      })
      .to([imageRef.current], {
        attr: {
          src:
            'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599812699/egghead-next-ebombs/wtf-DOM/dom-3.png',
        },
        duration: 4,
      })
  }, [])

  return (
    <div className="triggerElement">
      <img
        ref={imageRef}
        src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599812699/egghead-next-ebombs/wtf-DOM/dom-2.png"
      />
    </div>
  )
}
