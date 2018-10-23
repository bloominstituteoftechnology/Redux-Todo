import React from 'react';
// import FilterLink from '../container/FilterLink'
import {VisibilityFilters} from '../actions'

const Footer = () => (
    <div>
        <Span> Show: </Span>
        <FilterLink filter = {VisibilityFilters.SHOW_ALL}> All </FilterLink>
        <FilterLink filter = {VisibilityFilters.SHOW_ACTIVE}> Active </FilterLink>
        <FilterLink filter = {VisibilityFilters.SHOW_COMPLETED}> Comnpleted </FilterLink>
    </div>
)

export default Footer;