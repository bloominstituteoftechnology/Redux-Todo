import React from 'react'
import FilterLink from '../containers/FilterLink'
import './Footer.css'

const Footer = () => (
  <div className='footer'>
    <FilterLink filter="SHOW_ALL">all</FilterLink>
    <FilterLink filter="SHOW_ACTIVE">active</FilterLink>
    <FilterLink filter="SHOW_COMPLETED">completed</FilterLink>
  </div>
)

export default Footer
