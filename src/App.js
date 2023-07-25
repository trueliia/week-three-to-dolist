
import './App.css';
import image from './smiley.png';
import imageTwo from './motto.png';
import { ToDoList } from './ToDoList';


function App() {
  return (
    <div className="App">
      <div className="container">
      <img src={ image } width="250px" alt="smiley"/>
      </div>
      <div className="container">
      <h1>To Do List</h1>
      </div>
      <ToDoList/>
      <div className="container">
      <img src={ imageTwo } width="200px" alt="motto"/>
      </div>
    </div>
  );
}

export default App;
