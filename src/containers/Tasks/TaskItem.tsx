import React from 'react';
import {Task} from '../../types';
import {Link} from 'react-router-dom';

interface Props {
  task: Task;
  onClick?: React.MouseEventHandler;
  onDelete: React.MouseEventHandler;
  newTasks: Task;
  status: boolean;
}

const TaskItem: React.FC<Props> = ({task, newTasks, onClick, onDelete}) => {
  const imageUrl = 'https://cdn-icons-png.flaticon.com/512/5885/5885765.png';

  return (
    <div className="card mb-2 d-flex w-25 ms-md-5 col-3 mt-5">
      <div className="row no-gutters">
        <div className="col">
          <div className="card-body border border-success text-cente">
            <img src={imageUrl} className='w-25 mb-3 me-2 text-center'/>
            <h5 className="card-title text-center"><strong className='text-success'>Task:</strong> {task.name}</h5>
            <input type='checkbox' className='form-check-input mt-0'/>
            <p className="d-flex justify-content-around">
              <Link className="btn btn-success ms-2" to={`/edit-meals/${newTasks.id}`}>Edit</Link>
              <button className="btn btn-danger ms-2" onClick={onDelete}>Delete</button>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;