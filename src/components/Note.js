import React from 'react'
import {MdDeleteForever} from 'react-icons/md';

const Note = ({id,text,date,handleDeleteNote}) => {
  return (
    <div className='note'><span>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever onClick={()=>handleDeleteNote(id)} className='delete-icon' size='1.3em'/>
        </div>
    </span></div>
  )
}
export default  Note;