import React , {Component} from "react"

class TodoList extends Component {

    render(){
        return (
            <div>
                <form>
                <input type="text" />
              
                  <button type="submit">Add todoList</button>
                  <button type="submit">Remove todoList</button>

                  </form>
            </div>
        
        )
    }
}

export default TodoList;