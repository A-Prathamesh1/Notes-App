import React, { useState } from 'react'

export const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const charLimit = 200;

    const handleChange = (event) => {
        if(charLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
    }

    const handleSaveClick = () => {
    if(noteText.trim().length > 0){
    handleAddNote(noteText);
    setNoteText('');
    }
}

  return (
    <div className='note new'>
    <textarea 
    rows="8" 
    cols='10' 
    placeholder="ad a note..."
    onChange={handleChange}
    value={noteText}></textarea>
    <div className='note-footer'>
        <small>{200 - noteText.length}</small>
        <button className='save' onClick={handleSaveClick}>Save</button>
    </div></div>
  )
}
