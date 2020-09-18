import React, {useRef, useEffect} from 'react'
import {gsap} from 'gsap/dist/gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function NodesScroller() {
  const triggerRef = useRef(null)
  const nodes1 = useRef(null)
  const nodes2 = useRef(null)
  const nodes3 = useRef(null)
  const nodes4 = useRef(null)

  const altText =
    'The nodes in the DOM tree are like a family tree. They have parents, children, and sibling nodes'

  const textSteps = [
    'Each element in the HTML like paragraphs, images, and divs are represented by “nodes.”',
    'The nodes have relationships with other nodes, and can have “parents,” “children,” and “siblings.',
    'You can think of these relationships as you would with any family tree.',
    'Children” of the same “Parent” are “Siblings.',
  ]

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: [triggerRef.current],
        start: 'top top',
        scrub: true,
        pin: [triggerRef.current],
        pinSpacing: true,
      },
    })

    timeline
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
  }, [])

  return (
    <div
      ref={triggerRef}
      style={{
        width: '100%',
        height: '960px',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '2em',
      }}
    >
      <div
        style={{
          width: '30%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          marginRight: '1.6em',
        }}
      >
        {textSteps.map((step) => {
          return <p>{step}</p>
        })}
      </div>
      <div style={{width: '65%', position: 'relative'}}>
        <img
          alt={altText}
          style={{position: 'absolute', top: 0, left: 0, zIndex: 0}}
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1600099812/egghead-next-ebombs/wtf-DOM/dom-tree.jpg"
        />
        <img
          ref={nodes1}
          style={{position: 'absolute', top: 0, left: 0, opacity: 0, zIndex: 1}}
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1600099798/egghead-next-ebombs/wtf-DOM/dom-nodes-1.png"
        />

        <img
          ref={nodes2}
          style={{position: 'absolute', top: 0, left: 0, opacity: 0, zIndex: 2}}
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1600099804/egghead-next-ebombs/wtf-DOM/dom-nodes-2.png"
        />

        <img
          ref={nodes3}
          style={{position: 'absolute', top: 0, left: 0, opacity: 0, zIndex: 1}}
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1600099804/egghead-next-ebombs/wtf-DOM/dom-nodes-3.png"
        />

        <img
          ref={nodes4}
          style={{position: 'absolute', top: 0, left: 0, opacity: 0, zIndex: 2}}
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1600099804/egghead-next-ebombs/wtf-DOM/dom-nodes-4.png"
        />
      </div>
    </div>
  )
}
