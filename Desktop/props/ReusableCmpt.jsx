import React from 'react'

const ReusableCmpt = (props) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <p>{props.content1}</p>
    </div>
  )
}

export default ReusableCmpt