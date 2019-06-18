import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBRow, MDBCol} from 'mdbreact';

const Todo = props => (
  <div className="todo-card">
    <MDBRow>
      <MDBCol style={{ maxWidth: "22rem", backgroundColor: "white" }}>
        <MDBCard wide>
          <MDBCardImage className="view view-cascade gradient-card-header peach-gradient" cascade tag="div">
            <div className="description">
            <h2 className="h2-responsive mb-2 text" style={{ textAlign: "center" }}>{props.todo.value}</h2>
            <div className="close" onClick={() => props.delete(props.todo.id)}></div>
            </div>
          </MDBCardImage>
          <MDBCardBody cascade style={{ height: "5rem" }}>
            <MDBCardTitle style={{ textAlign: "center" }}>Status: {props.todo.done ? <img className="img" src="https://i.imgur.com/yq6i0Y7.png" alt="The task is done!"/> : <img className="img" src="https://i.imgur.com/asKEUHh.png" alt="The task is still ongoing!"/>}</MDBCardTitle>
            <MDBBtn href="#" onClick={() => props.toggle(props.todo.id)} style={{ marginLeft: "30%" }}>Toggle</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </div>
);

export default Todo;
