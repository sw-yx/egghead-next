import React from 'react'

const container =
  'bg-blue-100 border-l-4 border-blue border-blue-300 text-blue-600 px-8 py-1'

export default function Callout({children}) {
  return <div className={container}>{children}</div>
}
