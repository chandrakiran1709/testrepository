import React from 'react'

const Banner = () => {
  return (
    <div>
        <img src={require("./flowerPot.jpeg")} alt="Banner Image" className='imgg'/>
        <h2 className='hh1'>Title of a longer featured<br/>blog post</h2>
        <p className='pp1'>Multiple lines of text that form the lede, informing<br/>new readers quickly and efficiently about what's<br/>most interesting in this post's contents.</p>
        <a href="#" className='aa1'>Continue reading...</a>
    </div>
  )
}

export default Banner;