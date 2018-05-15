import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = {} => {
    <div>
        <span> Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
    </div>

}