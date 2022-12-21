import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Tasks from './containers/Tasks/Tasks';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={(<Tasks/>)}>
        </Route>
        </Routes>
    </Layout>
  );
}

export default App;

