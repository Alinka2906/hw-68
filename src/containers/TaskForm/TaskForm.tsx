import React, {useState} from 'react';
import {ApiTask, Task, TaskMutation} from '../../types';
import ButtonSpinner from '../../components/Spinner/buttonSpinner';

interface Props {
  onSubmit: (task: Task) => void;
  existingTask?: ApiTask;
  isEdit?: boolean;
  isLoading?: boolean
}

const initialState: ApiTask = {
  name: ''
};


const TaskForm: React.FC<Props> = ({onSubmit, existingTask = initialState, isLoading, isEdit}) => {
  const imageUrl = 'https://cdn-icons-png.flaticon.com/512/5885/5885765.png';
  const [task, setTask] =useState<ApiTask>(existingTask);

  const changeTasks = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setTask(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...task,
    })
  };

  return (
    <form className="form-control mt-2 ms-5 mb-5 w-100 border border-success d-flex" onSubmit={onFormSubmit}>
      <textarea
        className="w-100 border border-success text-success mt-3 mb-3" placeholder="New text..."
         name="name"
        required
        value={task.name}
        onChange={changeTasks}
      />
      <div className='d-flex justify-content-around'>
      <button className="btn btn-success mt-5 mb-5 pt-0 pb-0 pt-2 pb-2" type="submit" disabled={isLoading}>{isLoading && <ButtonSpinner/>}Add</button>
      <img src={imageUrl} className='w-50 mb-4'/>
      </div>
    </form>
  );
};

export default TaskForm;