import React from 'react'
import "./header.css"

export const Header = () => {
  return (
    <div className='container'>
      <input className='search-field' type='text' placeholder='search For a Pokemon'></input>
      <button className="search-button" type="submit" name="search" aria-label="Cerca">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
</button>
    </div>
  )
}
