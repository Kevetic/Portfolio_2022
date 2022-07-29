import React from 'react'
import {Document} from 'react-pdf'
import resume from './assets/resume2022.pdf'

function Resume() {
  return (
    <object data={resume} type="application/pdf" width="100%" height="900px">
      <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
  </object>
  )
}

export default Resume