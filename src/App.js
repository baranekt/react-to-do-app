import React from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';




function Todo({ todo, index, updateTodo, removeTodo }) {
  return (
    <div
      className="todo"
      
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>Delete✕</Button>
        <Button variant="outline-success" onClick={() => updateTodo(index)}>Update</Button>{' '}
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");
  const [priority, setpriority] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add Job</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Job" />
      <Form.Select size="sm"
        className="custom-select"
        value={priority}
        onChange={(e) => {
          const selectedPriority = e.target.value;
          setpriority(selectedPriority);
        }}
      >
        
          <option value="Urgent">Urgent</option>
          <option value="Regular">Regular</option>
          <option value="Trivial">Trivial</option>
      </Form.Select>
      {priority}
    </Form.Group>
    <Button class="button" variant="primary mb-3" type="submit">
      Create
    </Button>
  </Form>

  );
   
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "My job name",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const updateTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">

        <FormTodo addTodo={addTodo} />
        <div>
        <div class="list">
          <h3 class="title">Job List</h3>
          <div class="input-group ">
                  <div class="form-outline search-bar">
                    <input type="search" id="form1" class="form-control" placeholder="Search"/>
                  </div>
          </div>
        </div>
        <div class="black-line"></div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}

                todo={todo}
                updateTodo={updateTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}


export default App;



