import React from 'react';
import { connect } from 'react-redux';

const TodoForm = prop => {
  console.log(this);
  return (
    <div className='form-container'>
      <div className='input-container'>
        <input className='input' onKeyPress={e => {if (e.charCode === 13) {
          prop.submit();
        }}} placeholder='To Do...' onChange={prop.onchange} />
        <button className='submit' onClick={prop.submit}>Submit</button>
      </div>

      <div className='search-container'>
        <input className='search' onKeyPress={e => {if (e.charCode === 13) {
          prop.submitSearch();
        }}} placeholder='search' onChange={prop.onchangeSearch} />
        <button className='submit-search' onClick={prop.submitSearch}>Submit</button>
      </div>

      <div className='clears'>
        <button className='clear-complete' onClick={prop.clearComplete}>Clear Completed Tasks</button>
        <button className='clear-all' onClick={prop.annihilate}>Clear All</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

export default connect(mapStateToProps)(TodoForm);
