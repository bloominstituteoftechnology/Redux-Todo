import React from 'react';
import FilteredTab from '../containers/FilteredTab';
import { filters } from '../actions';

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = filters;

const Footer = () => (
	<div>
		<span>Show: </span>
		<FilteredTab filter={SHOW_ALL}>
			All
		</FilteredTab>
		<FilteredTab filter={SHOW_ACTIVE}>
			Active
		</FilteredTab>
		<FilteredTab filter={SHOW_COMPLETED}>
			Completed
		</FilteredTab>
	</div>
);

export default Footer;