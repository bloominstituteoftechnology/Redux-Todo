import React from 'react';
import FilteredTab from '../containers/FilteredTab';
import { filters } from '../actions';

const Footer = () => (
    <div>
        <span>Show: </span>
        <FilteredTab filter={filters.SHOW_ALL}>
            All
        </FilteredTab>
        <FilteredTab filter={filters.SHOW_ACTIVE}>
            Active
        </FilteredTab>
        <FilteredTab filter={filters.SHOW_COMPLETED}>
            Completed
        </FilteredTab>
    </div>
);

export default Footer;