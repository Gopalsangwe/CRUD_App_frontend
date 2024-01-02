import React, { useState } from 'react';
import axios from 'axios';

const CreateItem = () => {
  const [itemName, setItemName] = useState('');
  const [Price, setPrice] = useState('');
  const [Quantity, setQuantity] = useState('');
  const [itemId,setItemId]=useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/items', {
        id:itemId,  
         name: itemName,
        price: Price,
        quantity: Quantity
      });
      // Handle success or reset form
       setItemId('');
       setItemName('');
      setPrice('');
      setQuantity('');
      alert('Item added successfully');
    } catch (error) {
      // Handle error
      console.error('Error adding item:', error);
      alert('Failed to add item');
    }
  };

  return (
    <div>
      <h2>Create Item</h2>
      <form onSubmit={handleFormSubmit}>
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
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Item Quantity"
          value={Quantity}
          onChange={(e) =>  setQuantity(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default CreateItem;
