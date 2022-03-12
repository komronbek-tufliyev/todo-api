import React, {Component} from 'react';
import axios from 'axios';

class App extends Component{
  state = {
    todos: []
  }
  componentDidMount(){
    this.getTodos();
  }

  getTodos(){
    axios
    .get('http://127.0.0.1:8000/api/')
    .then(res => {
      this.setState({ todos: res.data });
    })
    .catch(err => console.log(err));
  }

  render(){
    return(
      <div>
      {this.state.todos.map(todo => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.body}</p>
        </div>
        ))}

    </div>
    )
  }
}

export default App;