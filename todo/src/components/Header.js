import React, { Component } from 'react';
import Card from './styled-component/Card';
import { connect } from 'react-redux';



class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
              <Card>
                  <h1>Todos List</h1>
                  <ul>
                    <li>{this.props.ideal}</li>  
                  </ul>
              </Card>  
            </div>
        );
    }
}

// export default Todo;

const mapStateToProps = (state) => {
     return {
         ideal: state[0].value
     }
}

export default connect(mapStateToProps)(Header);