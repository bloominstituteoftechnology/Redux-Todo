import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleComplete } from "../Actions/actionCreators";
import styled from "styled-components";

export class Todo extends React.Component {
    render() {
      return (
        <StyledUl>
          {this.props.todos.map(item => (
            <li
              key={item.id}
              onClick={() => this.props.toggleComplete(item.id)}
              className={`strike-${item.completed}`}
            >
              {item.value}
            </li>
          ))}
        </StyledUl>
      );
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({toggleComplete},dispatch);
  };
  
  export default connect(
    null,
    mapDispatchToProps
  )(Todo);



  const StyledUl = styled.ul`
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  margin: 60px auto;
  display: block;
  padding: 0;
  list-style-type: none;
  width:400px;

  li {
    background-color:black;
    padding: 15px;
    margin: 10px 0;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        background-color: gray;
        color: red;
    }
  }
`
