import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';


const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
        </FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            All
        </FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            All
        </FilterLink>
    </p>
)

export default Footer;