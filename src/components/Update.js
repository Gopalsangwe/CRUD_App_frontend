import React, { useState } from 'react';
import axios from 'axios';
//import { useNavigate } from "react-router-dom";
const UpdateItem = ({  }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemId,setItemId]=useState('');
  
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/items`, {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity,
        itemId:itemId
      });
      // Handle success or perform any necessary actions
      alert('Item updated successfully');
      

    } catch (error) {
      // Handle error
      console.error('Error updating item:', error);
      alert('Failed to update item');
    }
  };

  
  return (
    <div>
      <h2>Update Item</h2>
      <input
        type="text"
        placeholder="Item Id"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Item Price"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Item Quantity"
        value={itemQuantity}
        onChange={(e) => setItemQuantity(e.target.value)}
      />
    
      <button onClick={handleUpdate}>Update Item</button> <br>
      </br>
     

    </div>
  );
};

export default UpdateItem;
