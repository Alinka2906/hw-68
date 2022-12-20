import React from 'react';
import {Route, Routes} from 'react-router-dom';
import TaskEdit from './containers/TaskForm/TaskEdit';
import Layout from './components/Layout/Layout';
import Tasks from './containers/Tasks/Tasks';
import TaskForm from './containers/TaskForm/TaskForm';
import TasksNew from './containers/TaskForm/TaskNew';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={(<Tasks/>)}>
        </Route>
        <Route path='/edit-task/:id' element={(<TasksNew/>)}>
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;

