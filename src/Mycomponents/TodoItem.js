import React from 'react'

function TodoItem(props) {
    return (
            <div className="content">
              <button className="btn-cross" onClick={()=>{props.onDelete(props.todo)}}><i className="fa fa-times" aria-hidden="true"></i></button>
              <h4>{props.todo.title}</h4>
            </div>
    )
}

export default TodoItem
