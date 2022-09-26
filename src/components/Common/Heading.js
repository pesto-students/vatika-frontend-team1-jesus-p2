import React from 'react'

function Heading({content}) {
  return (
    <div className='heading'>
        <h1>
        <img src={require("../../assets/Heading_Leaf.png")} alt="facebook" />
        {content}</h1>
    </div>
  )
}

export default Heading