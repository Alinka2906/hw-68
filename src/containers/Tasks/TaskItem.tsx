import React, {ChangeEvent, useState} from 'react';
import {Task, TasksItem} from '../../types';
import {Link} from 'react-router-dom';

interface Props {
  task: Task | TasksItem;
  onClick?: React.MouseEventHandler;
  onDelete: React.MouseEventHandler;
  newTasks: Task;
}

const TaskItem: React.FC<Props> = ({task, newTasks, onClick, onDelete}) => {
  const imageUrl = 'https://cdn-icons-png.flaticon.com/512/5885/5885765.png';
  const [item, setItem] = useState<TasksItem>({
    isDone: false,
    name: ''
  })



  return (
    <div className="card mb-2 d-flex w-25 ms-md-5 col-3 mt-5">
      <div className="row no-gutters">
        <div className="col">
          <div className="card-body border border-success text-center">
            <img src={imageUrl} className='w-25 mb-3 me-2 text-center'/>
            <h5 className="card-title text-center"><strong className='text-success'>Task:</strong> {task.name}</h5>
            <label>Status:
            <input
              type='checkbox'
              className='form-check-input mt-2 mb-3 vs-2 text-center'
              checked={item.isDone}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setItem(prev => ({...prev, isDone: e.target.checked}))
              }}
              name='isDone'>
            </input>
            </label>
            <p className="d-flex justify-content-around">
              <Link className="btn btn-success ms-2" to={`/edit-meals/${newTasks.id}`}>Edit</Link>
              <button className="btn btn-danger ms-2" onClick={onDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="currentColor"
                     className="bi bi-basket3" viewBox="0 0 16 16">
                  <path
                    d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                </svg>
              </button>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;