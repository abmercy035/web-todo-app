import React from 'react'

export default function Button({ cls, click, text, id }) {
 return (
  <button className={ cls } onClick={ click }>
   { text }
  </button>
 )
}
