import React, {useRef, useState, useEffect} from 'react'
import {gsap} from 'gsap'
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

export default function ImageScroller({children}) {
  const imageRef = useRef(null)
  // const [image, setImage] = useState('')

  useEffect(() => {
    const timeline = gsap.timeline({
      // scrollTrigger: {
      //     trigger: '.triggerElement',
      //     scrub: true
      // }
    })

    timeline
      .to([imageRef.current], 1, {
        attr: {
          src:
            'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM.jpg',
        },
      })
      .to([imageRef.current], 1, {
        attr: {
          src:
            'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM-2.jpg',
        },
      })
      .to([imageRef.current], 1, {
        attr: {
          src:
            'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM-3.jpg',
        },
      })
      .to([imageRef.current], 1, {
        attr: {
          src:
            'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM-4.jpg',
        },
      })
  }, [])

  return (
    <div className="triggerElement">
      <img
        ref={imageRef}
        rc="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599594005/maggieappleton.com/notes/gsap/GSAP-DOM.jpg"
      />
    </div>
  )
}
