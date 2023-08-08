// import React from 'react'

import { useParams } from "react-router-dom"

export default function Html_home() {
  const {name} =useParams()
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}
