import React, { Component } from 'react'
import TodoItems from './TodoItems';
export default class TodoList extends Component {
    render() {
        const {items ,clearList,handleDelete,HandleEdite} = this.props;
        return (
            <ul className="list-group my5">
                <h3 className="text-capitalize text-center">Todo List</h3>   
                
                {
                    items.map(item =>{
                        return <TodoItems
                        key ={item.id}
                        title = {item.title} 
                        handleDelete ={() =>handleDelete(item.id)}
                        HandleEdite ={() =>HandleEdite(item.id)}
                        />
                    })
                }
                <button className="btn btn-danger btn-block text-capitalize" onClick={clearList}>Clear List</button>
            </ul>
            
        )
    }
}
