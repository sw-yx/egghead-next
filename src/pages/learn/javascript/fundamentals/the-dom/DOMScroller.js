import React, {useRef, useState, useEffect} from 'react'
import {gsap} from 'gsap/dist/gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function DOMScroller() {
  const imageRef = useRef(null)
  // const [isLoading, setIsLoading] = useState(true)
  // const [images, setImages] = useState([])

  const altText =
    'The DOM is the “final output” of your browser after reading the HTML'

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#triggerElement',
        start: 'top 50%',
        end: 'bottom 80%',
        markers: true,
        scrub: true,
      },
    })

    timeline
      .to([imageRef.current], {
        attr: {
          src:
            'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599816716/egghead-next-ebombs/wtf-DOM/dom2.jpg',
        },
      })
      .to([imageRef.current], {
        attr: {
          src:
            'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599816717/egghead-next-ebombs/wtf-DOM/dom3.jpg',
        },
      })
      .to([imageRef.current], {
        attr: {
          src:
            'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1600084432/egghead-next-ebombs/wtf-DOM/dom4.jpg',
        },
      })
  }, [])

  return (
    <div
      style={{width: '100%', height: '700px', marginBottom: '10%'}}
      id="triggerElement"
    >
      <img
        style={{maxWidth: '600px', maxHeight: '100%', margin: '0 auto'}}
        ref={imageRef}
        src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1599817004/egghead-next-ebombs/wtf-DOM/dom1.jpg"
        alt={altText}
      />
    </div>
  )
}
