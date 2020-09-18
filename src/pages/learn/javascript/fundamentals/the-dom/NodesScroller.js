import React, {useRef, useEffect} from 'react'
import {gsap} from 'gsap/dist/gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function NodesScroller() {
  const pinRef = useRef(null)
  const textRef = useRef(null)
  const nodes1 = useRef(null)
  const nodes2 = useRef(null)
  const nodes3 = useRef(null)
  const nodes4 = useRef(null)

  const altText =
    'The nodes in the DOM tree are like a family tree. They have parents, children, and sibling nodes'

  const textSteps = [
    'Each element in the HTML like paragraphs, images, and divs are represented by “nodes.” The nodes have relationships with other nodes, and can have “parents,” “children,” and “siblings.',
    'You can think of these relationships as you would with any family tree. "Children” of the same “Parent” are “Siblings."',
  ]

  useEffect(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: [pinRef.current],
        start: 'top top',
        scrub: true,
        pin: [pinRef.current],
        pinSpacing: true,
      },
    })

    const labelsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: [textRef.current],
        scrub: true,
        start: 'top 70%',
      },
    })

    labelsTimeline
      .to([nodes1.current], {
        opacity: 1,
      })
      .to([nodes2.current], {
        opacity: 1,
      })
      .to([nodes1.current], {
        opacity: 0,
      })
      .to([nodes2.current], {
        opacity: 0,
      })
      .to([nodes3.current], {
        opacity: 1,
      })
      .to([nodes3.current], {
        opacity: 0,
      })
      .to([nodes4.current], {
        opacity: 1,
      })

    scrollTimeline.add(labelsTimeline)
  }, [])

  return (
    <div
      style={{
        width: '130%',
        marginLeft: '-15%',
        height: '130vh',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '1em',
        marginTop: '-3%',
        marginBottom: '105vh',
      }}
    >
      <div
        ref={pinRef}
        style={{
          width: '60%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <img
          alt={altText}
          style={{maxHeight: '90vh', position: 'absolute', top: 0, zIndex: 0}}
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1600099812/egghead-next-ebombs/wtf-DOM/dom-tree.jpg"
        />
        <img
          ref={nodes1}
          alt={altText}
          style={{
            maxHeight: '90vh',
            position: 'absolute',
            top: 0,
            opacity: 0,
            zIndex: 1,
          }}
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1600099798/egghead-next-ebombs/wtf-DOM/dom-nodes-1.png"
        />

        <img
          ref={nodes2}
          alt={altText}
          style={{
            maxHeight: '90vh',
            position: 'absolute',
            top: 0,
            opacity: 0,
            zIndex: 2,
          }}
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1600099804/egghead-next-ebombs/wtf-DOM/dom-nodes-2.png"
        />

        <img
          ref={nodes3}
          alt={altText}
          style={{
            maxHeight: '90vh',
            position: 'absolute',
            top: 0,
            opacity: 0,
            zIndex: 1,
          }}
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1600099804/egghead-next-ebombs/wtf-DOM/dom-nodes-3.png"
        />

        <img
          ref={nodes4}
          alt={altText}
          style={{
            maxHeight: '90vh',
            position: 'absolute',
            top: 0,
            opacity: 0,
            zIndex: 2,
          }}
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1600099804/egghead-next-ebombs/wtf-DOM/dom-nodes-4.png"
        />
      </div>
      <div
        ref={textRef}
        style={{
          width: '40%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
          paddingLeft: '4em',
          marginTop: '80vh',
        }}
      >
        {textSteps.map((step) => {
          return <p style={{marginBottom: '50vh'}}>{step}</p>
        })}
      </div>
    </div>
  )
}
