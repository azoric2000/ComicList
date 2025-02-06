import React from 'react'

let year = new Date().getFullYear()
const Footer = () => {
  return (
    <div className='footer'>CopyRight {year} <a href='http://www.andyzoric.com' target='_blank'>andyzoric.com</a> All Rights Reserved </div>
  )
}

export default Footer