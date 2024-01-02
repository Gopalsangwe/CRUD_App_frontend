import React from 'react'
import { useNavigate } from 'react-router'
import UpdateItem from './Update';
import DeleteItem from './Delete';

const Home = () => {

  const navigate=useNavigate();
 
  const displayList =()=>{
    navigate('/table');
  } 
  const AddItem =()=>{
    navigate('/create');
  } 
  const UpdateItem =()=>{
    navigate('/update');
  } 
  const DeleteItem =()=>{
    navigate('/delete');
  } 

  return (
    <div>
      <h1>Crud Application</h1>
      <button type='button' class="btn btn-primary" onClick={displayList}>Display List</button>&nbsp;&nbsp;&nbsp;
      <button type='button' class="btn btn-primary" onClick={AddItem}>AddItem</button>&nbsp;&nbsp;&nbsp;
      <button type='button' class="btn btn-primary" onClick={UpdateItem}>UpdateItem</button>&nbsp;&nbsp;&nbsp;
      <button type='button' class="btn btn-primary" onClick={DeleteItem}>DeleteItem</button>&nbsp;&nbsp;&nbsp;
    </div>
  )
}

export default Home
