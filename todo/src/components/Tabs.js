import React from "react";
import Filtered from "../containers/Filtered";
import { Filters } from "../actions";

const Tabs = () => (
  <div>
    <span>Show: </span>
    <Filtered filter={Filters.SHOW_ALL}>All</Filtered>
    <Filtered filter={Filters.SHOW_ACTIVE}>Active</Filtered>
    <Filtered filter={Filters.SHOW_COMPLETED}>Completed</Filtered>
  </div>
);

export default Tabs;
