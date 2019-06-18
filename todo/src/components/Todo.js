import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBRow, MDBCol} from 'mdbreact';

const Todo = props => (
    <div className="todo-card">
    <MDBRow>
      <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard wide>
          <MDBCardImage className="view view-cascade gradient-card-header peach-gradient" cascade tag="div">
            <h2 className="h2-responsive mb-2" style={{ textAlign: "center" }}>{props.todo.value}</h2>
          </MDBCardImage>
          <MDBCardBody cascade style={{ height: "5rem" }}>
            <MDBCardTitle style={{ textAlign: "center" }}>Status: {props.todo.done ? <img src="https://i.imgur.com/yq6i0Y7.png" alt="The task is done!"/> : <img src="https://i.imgur.com/asKEUHh.png" alt="The task is still ongoing!"/>}</MDBCardTitle>
            <MDBBtn href="#" style={{ marginLeft: "34%" }}>Toggle</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
);

export default Todo;