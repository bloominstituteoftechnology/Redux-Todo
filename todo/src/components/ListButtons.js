import React from "react";
import FilterLink from "../containers/filterLink";
import { VisibilityFilters } from "../actions";

const ListButtons = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
  </div>
);

export default ListButtons;
