import React from 'react'

import * as C from '../store/constants'
import { showAll, showComplete, showIncomplete } from '../store/actions'


export default function Filter({ dispatch }) {
    const handleShowAll = () => {
      dispatch( showAll() )
    }
  
    const handleShowComplete = () => {
      dispatch( showComplete() )
    }
  
    const handleShowIncomplete = () => {
      dispatch( showIncomplete() )
    }
  
    return (
      <div className="filter">
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