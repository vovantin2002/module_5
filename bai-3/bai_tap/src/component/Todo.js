import { Component } from "react";

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todoName: "",
            todoList: []
        }
    }
    handleInputName(todoName) {
        this.setState({
            todoName: todoName
        })
    }
    
    addTodo() {
        let todoName = document.getElementById("todoName").value;
        if (todoName.trim() != "") {
            this.setState({
                todoList: [...this.state.todoList, this.state.todoName],
                todoName: ""
            })
        }
    }
        render(){
            return (
                <>
                    <h1>Danh sách công việc</h1>
                    <input id="todoName"value={this.state.todoName} 
                    onChange={(event) => 
                    this.handleInputName(event.target.value)}></input>
                    <button onClick={() => this.addTodo()}>Add</button>
                    <ul>
                        {this.state.todoList.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })}
                    </ul>
                </>
            )
        }
    }

export default Todo;