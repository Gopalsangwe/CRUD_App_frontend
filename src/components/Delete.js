import { useState } from 'react';
import React from 'react';
import axios from 'axios';


const DeleteItem = () => {

  const[deleteId,setdeleteId]=useState('')
  const handleDelete=async()=>{
    try {
      if (!deleteId) {
          console.error('Item ID is undefined');
          return;
        }
    const response=await axios.delete(`http://localhost:3000/items/${deleteId}`); // Update URL to your backend endpoint
    // Handle success or perform any necessary actions
    if(response.status===200){
      
      alert('Item deleted successfully');
    }else {
      alert('Failed to delete item');
    }
      }catch (error) {
    // Handle error
    console.error('Error deleting item:', error);
    alert('Failed to delete item');
  }

  };

  return (
    <div>
      <h2>Delete item</h2>
      <input
        type="text"
        placeholder="Item Id"
        value={deleteId}
        onChange={(e) => setdeleteId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Item</button>
      {/* <button onClick={handleDelete}>Delete Item</button> */}
    </div>
  );
};

export default DeleteItem;
