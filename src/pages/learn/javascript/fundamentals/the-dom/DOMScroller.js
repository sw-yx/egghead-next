import React, {useRef, useState, useEffect} from 'react'
import {gsap} from 'gsap/dist/gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function DOMScroller({children}) {
  const triggerRef = useRef(null)
  const img2 = useRef(null)
  const img3 = useRef(null)
  const img4 = useRef(null)
  // const imageRef = useRef(null)
  // const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: [triggerRef.current],
        start: 'top top',
        scrub: true,
        pin: true,
      },
    })

    timeline
      .to([img2.current], {
        opacity: 1,
      })
      .to([img3.current], {
        opacity: 1,
      })
      .to([img4.current], {
        opacity: 1,
      })
  }, [])

  return (
    <div
      ref={triggerRef}
      style={{
        maxWidth: '820px',
        margin: '0 auto',
        marginBottom: '10%',
        position: 'relative',
        height: '820px',
      }}
    >
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '40px',
          margin: '0 auto',
          zIndex: 0,
        }}
      >
        <img
          style={{
            margin: '0 1em',
            justifyContent: 'flex-end',
            objectFit: 'contain',
            maxWidth: '300px',
          }}
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599817004/egghead-next-ebombs/wtf-DOM/dom1.jpg"
        />
        <span style={{flexBasis: 'fill'}}>{children}</span>
      </div>
      <img
        ref={img2}
        style={{
          position: 'absolute',
          opacity: 0,
          top: 0,
          maxWidth: '100%',
          zIndex: 1,
        }}
        src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599816716/egghead-next-ebombs/wtf-DOM/dom2.jpg"
      />
      <img
        ref={img3}
        style={{
          position: 'absolute',
          opacity: 0,
          top: 0,
          maxWidth: '100%',
          zIndex: 2,
        }}
        src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599816717/egghead-next-ebombs/wtf-DOM/dom3.jpg"
      />
      <img
        ref={img4}
        style={{
          position: 'absolute',
          opacity: 0,
          top: 0,
          maxWidth: '100%',
          zIndex: 3,
        }}
        src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1600084432/egghead-next-ebombs/wtf-DOM/dom4.jpg"
      />
    </div>
  )
}
