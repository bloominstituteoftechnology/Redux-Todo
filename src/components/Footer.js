import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
<div className="link-div">
  <p className="link-text">
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {' '}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {' '}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
</div>
)

export default Footer
