import React, { useState, useEffect } from 'react'

export function Header() {
  const [title, setTitle] = useState('');
    
  return <div className='title-name'>{title}</div>
}