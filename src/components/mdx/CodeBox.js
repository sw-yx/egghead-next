import React from 'react'

const container = 'mx-8 px-8 py-1 bg-gray-800 text-gray-200 rounded-md'

export default function CodeBox({children}) {
  return <div className={container}>{children}</div>
}
