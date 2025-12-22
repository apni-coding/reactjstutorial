import React from 'react';
import headStyle from './headerOne.module.css'
console.log(headStyle)
export default function HeaderOne() {
  return (
    <div className='wrapper'>
      <h1>Heading1</h1>
      <button className={headStyle.headBtn}>Button1</button>
    </div>
  )
}
