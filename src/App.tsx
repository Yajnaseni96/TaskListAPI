import React, {FC} from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import Header from './components/Header'
import Sidebar from './components/SideBar';
import Notification from './components/Notification';
import { RootState } from './store/store';

const App:FC =() =>{
  const NotificationMsg = useSelector((state: RootState) => state.notification.message);
  return (
    <div className="App">
      <Header title="Task List App" subtitle="Create some lists and add some tasks to each list"/>

      <div className="container px-5">
        <div className="columns">
          <Sidebar/>
        </div>
      </div>
      <Notification msg={NotificationMsg}/>
    </div>
  );
}

export default App;
