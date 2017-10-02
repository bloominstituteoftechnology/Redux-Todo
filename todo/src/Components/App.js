import React, { Component } from 'react';
import Card from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import AddTodo from '../Containers/AddTodo';
import TodoList from '../Containers/TodoList';

const style = {
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '5%'
};

class App extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} md={6} style={style}>
          <Card>
            <AppBar position="static">
              <Toolbar>
                <Typography type="display3" align="center" style={{color: '#fff'}}>
                  Todo List
                </Typography>
              </Toolbar>
            </AppBar>
            <AddTodo />
            <TodoList />
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default App;
