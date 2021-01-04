import React, {FC} from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import Header from './components/Header'
import Sidebar from './components/SideBar';
import Notification from './components/Notification';
import { RootState } from './store/store';
import DeleteListModal from './components/DeleteListModal';
import EditListModal from './components/EditListModal';

const App:FC =() =>{
  const NotificationMsg = useSelector((state: RootState) => state.notification.message);
  const listIdToDelete = useSelector((state: RootState) => state.list.listIdToDelete);
  const listToEdit = useSelector((state: RootState) => state.list.listToEdit);
  

  return (
    <div className="App">
      <Header title="Task List App" subtitle="Create some lists and add some tasks to each list"/>

      <div className="container px-5">
        <div className="columns">
          <Sidebar/>
        </div>
      </div>
      <Notification msg={NotificationMsg}/>
      {listIdToDelete && <DeleteListModal listId={listIdToDelete}/>}
      {listToEdit && < EditListModal list={listToEdit}/>}
    </div>
  );
}

export default App;
