import React, { useState } from 'react';

export default function InsertProductScreen() {

    const [name, setName] = useState(''); 
    const [size, setSize] = useState('');
    const [qty, setQty] = useState('');
    const [price, setPrice] = useState('');
    const [des, setDes] = useState('');
    const [image, setImage] = useState('');

  return (
    <div className='container-md'>
      <form>
         <div className="form-floating m-3 ">
            <input type="text" className="form-control" id="floatingInput" placeholder="name" 
              required onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating m-3 ">
            <input type="text" className="form-control" id="floatingInput" placeholder="fish size" 
              required onChange={(e) => setSize(e.target.value)}/>
            <label htmlFor="floatingInput">Fish Size</label>
          </div>
          <div className="form-floating m-3 ">
            <input type="text" className="form-control" id="floatingInput" placeholder="quantity" 
              required onChange={(e) => setQty(e.target.value)}/>
            <label htmlFor="floatingInput">Quantity</label>
          </div>
          <div className="form-floating m-3 ">
            <input type="text" className="form-control" id="floatingInput" placeholder="price" 
              required onChange={(e) => setPrice(e.target.value)}/>
            <label htmlFor="floatingInput">Price</label>
          </div>
          <div className="form-floating m-3 ">
            <input type="text" className="form-control" id="floatingInput" placeholder="description" 
              required onChange={(e) => setDes(e.target.value)}/>
            <label htmlFor="floatingInput">Description</label>
          </div>
          <div className="form-floating m-3 ">
          <div class="input-group">
            <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
            <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
           </div>
      
          </div>
      </form>
    </div>
  );
}
