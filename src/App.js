import './App.css';
import TodoItem from './Mycomponents/TodoItem';
import {useState,useEffect} from 'react';


function App() {

  var todoList;
  if(localStorage.getItem("todo") === null){
    todoList = [];
  }else{
    todoList = JSON.parse(localStorage.getItem("todo"));
  }

  const [itemName, setitemName] = useState('');
  const [todo_list, settodo_list] = useState(todoList);
  const [alert, setalert] = useState('');

  useEffect(() => {
    localStorage.setItem("todo",JSON.stringify(todo_list));
  
  }, [todo_list])

  const addItem= (e)=>{
    e.preventDefault();
    if(itemName === ''){
      setalert("Fill Something !!");
    }else{
    var id;
    if(todo_list.length === 0){
      id=1;
    }else{
      id=String(parseInt(todo_list[todo_list.length-1].id)+1);
    }
    const temp = {
      id:id,
      title:itemName
    }
    
    settodo_list([...todo_list,temp]);
    // console.log(todo_list);
    setitemName('');
    setalert('');
  }
  }

  const onDelete = (todo)=>{
    settodo_list(
      todo_list.filter((e)=>{return e!==todo})
    )
  }
  

  return (
    <div className="container">
      <div className="todo-container">
          <h3>To Do List</h3>

          <form  className="addItem" onSubmit={addItem}>
            <input type="text" 
            value={itemName}
            onChange={(e)=>{setitemName(e.target.value)}}
            /><button className="btn-add" type="submit"> <i className="fa fa-plus fa-2x" aria-hidden="true"></i></button>
          </form>
          <h4 className="alert">{alert}</h4>
          {!todo_list.length && <h5>Nothing To Display.</h5>}
          <div className="display">
            {todo_list.map((item,i)=>{return <TodoItem todo={item} key={i} onDelete={onDelete}></TodoItem>})}
          </div>
      </div> 
    </div>
  );
}

export default App;
