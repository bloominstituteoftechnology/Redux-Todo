import React, {
  Component
} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoArray: [{
          value: 'import redux library',
          completed: false
        },
        {
          value: 'build action',
          completed: false
        },
        {
          value: 'build action creator',
          completed: false
        }
      ]
    }
  }

  render() {
    return ( 
      <div className = "App">

      </div>
    );
  }
}


export default App;