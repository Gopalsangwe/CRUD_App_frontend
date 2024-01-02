import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Create from './Create'
import Delete from './Delete'
import Update from './Update'

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get('http://localhost:3000/items'); // Update URL to your backend endpoint
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    }

    fetchItems();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      <h2>Items List</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* <Delete /> */}
     
    </div>
  );
};

export default ItemList;
