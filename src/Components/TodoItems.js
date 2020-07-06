import React, { Component } from 'react'

export default class TodoItems extends Component {
    
    render() {
        const {title,handleDelete,HandleEdite} = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6 className="my-2">{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success">
                       <button className="btn btn-success" onClick = {HandleEdite}>Edit</button>
                    </span>
                    <span className="mx-2 text-danger">
                    <button className="btn btn-danger" onClick ={handleDelete}>Clear</button>
                    </span>
                </div>
            </li>
        )
    }
}
