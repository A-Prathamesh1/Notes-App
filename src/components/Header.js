import React from 'react'

export const Header = ({handleDarkMode}) => {
    
  return (
    <div className='header'><h1>Notes</h1>
    <button 
    className='save' 
    onClick={() =>
    handleDarkMode(
        (previousDarkMode) => !previousDarkMode)}>Toggle Mode</button></div>
  )
}
