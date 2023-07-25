import { Component } from 'react';
import pin from './pin.png';
export class ToDoList extends Component{
    state = {
        userInput:"",
        toDoList:[],
    }
    onChangeEvent(e) {
        this.setState({ userInput: e})
    }
    addItem(input){
        if(input ===''){
            alert ("Please enter an item")
        } else{
        let ListArray = this.state.toDoList;
        ListArray.push(input);
        this.setState({toDoList: ListArray, userInput:''})
        }
    }
    deleteItem(){
        let ListArray = this.state.toDoList;
        ListArray = [];
        this.setState({toDoList: ListArray})
    }
    crossedWord(event){
        const li=event.target;
        li.classList.toggle('crossed');
    }
    onFormSubmit(e){
        e.preventDefault()
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <input type="text" 
                    placeholder="What needs to be done today?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>
                <div className="container">
                    <button className="btn add" onClick={() =>this.addItem(this.state.userInput)}>ADD</button>
                </div>
                <ul>
                    {this.state.toDoList.map((item,index) => 
                    <li onClick={this.crossedWord} key = {index}>
                        <img src={pin} width="30px" alt="pin"/>
                        { item }</li>)}
                </ul>
                <div className="container">
                <button className="btn delete"onClick={() => this.deleteItem()}>ERASE THE LIST</button>
                </div>
                </form>
            </div>
        )
    }
}