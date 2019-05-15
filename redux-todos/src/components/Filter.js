import React from 'react'
import * as C from '../store/constants'

export default function Filter({ dispatch }) {
    const handleShowAll = () => {
      dispatch({ type: C.SHOW_ALL })
    }
  
    const handleShowComplete = () => {
      dispatch({ type: C.SHOW_COMPLETE })
    }
  
    const handleShowIncomplete = () => {
      dispatch({ type: C.SHOW_INCOMPLETE })
    }
  
    return (
      <div>
        <button type="button" onClick={handleShowAll}>
          Show All
        </button>
        <button type="button" onClick={handleShowComplete}>
          Show Complete
        </button>
        <button type="button" onClick={handleShowIncomplete}>
          Show Incomplete
        </button>
      </div>
    )
  }