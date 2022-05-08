import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createproduct } from '../actions/productActions';
import Loading from '../components/Loading';
import Message from '../components/Message';

export default function InsertProductScreen(props) {
 
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [size, setSize] = useState('');
  const [des, setDes] = useState('');
  const [image, setImage] = useState('');
 
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userData } = userSignin;

  const productCreate = useSelector((state) => state.productCreate);
  const {success, loading, error} = productCreate;

  const dispatch = useDispatch();

  
  const submitHandler= (e) => {
    e.preventDefault();
    dispatch(createproduct(name, category, price, countInStock, size, des, image))
  }
  useEffect(() =>{
    if(success){
        alert("Product Inserted");
    }
  }, [dispatch, success]);


  return (
    <div className='container'>
      <form className='form' onSubmit={submitHandler}>
      <div>
            {loading && <Loading/>}
            {error && <Message variant="danger">{error}</Message>}
          </div>
         <div className="form-floating m-3 ">
            <input type="text" className="form-control" id="floatingInput" placeholder="name" 
              required onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating m-3 ">
            <input type="text" className="form-control" id="floatingInput" placeholder="category" 
              required onChange={(e) => setCategory(e.target.value)}/>
            <label htmlFor="floatingInput">Category</label>
          </div>
          <div className="form-floating m-3 ">
            <input type="text" className="form-control" id="floatingInput" placeholder="size" 
              required onChange={(e) => setSize(e.target.value)}/>
            <label htmlFor="floatingInput">Fish Size</label>
          </div>
          <div className="form-floating m-3 ">
            <input type="text" className="form-control" id="floatingInput" placeholder="quantity" 
              required onChange={(e) => setCountInStock(e.target.value)}/>
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
          <div className="form-floating m-3">
              <input className='form-control'
                id="image"
                type="text"
                placeholder="Insert Image"
                value={image}
                onChange={(e)=> setImage(e.target.value)} />
                <label for="floatingInput">Image</label>
            </div>
          <div className="form-floating m-3 ">            
          <div class="input-group">
            <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" 
            aria-label="Upload" required onChange={(e) => setImage(e.target.value)}/>
            <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
           </div>
      
          </div>
          <div>              
              <button className="primary" type="submit">
                  Insert
              </button>
          </div>
      </form>
    </div>
  );
}






// import React, { useEffect, useState } from 'react';
// import { createproduct } from '../actions/productActions';
// // import { useDispatch } from 'react-redux';
// // import { useSelector } from 'react-redux';
// // import { createproduct } from '../actions/productActions';
// // import Loading from '../components/Loading';
// // import Message from '../components/Message';

// export default function InsertProductScreen() {
 
//   // const [name, setName] = useState('');
//   // const [category, setCategory] = useState('');
//   // const [price, setPrice] = useState('');
//   // const [countInStock, setCountInStock] = useState('');
//   // const [size, setSize] = useState('');
//   // const [des, setDes] = useState('');
//   // const [image, setImage] = useState('');
 
//   // const userSignin = useSelector((state) => state.userSignin);
//   // const { userData } = userSignin;

//   // const productCreate = useSelector((state) => state.productCreate);
//   // const {productss, loading, error} = productCreate;

//   // const dispatch = useDispatch();

//   //  const [details, setDetails] = useState({
//   //   name
//   //  });
//   const[isSubmitting, setIsSubmitting] =  useState(false);
//   const[details, setDetails] = useState({
//     name: "",
//     category: "",
//     price: "",
//     countInStock: "",
//     size: "",
//     des: "",
//     image: ""
//   });

//   const [errors, setErrors] = useState({});

//   //handling the input values
//   const handleChange = (props) => (event) =>{
//     setDetails({...details, [props]: event.target.value});
//   };

//   //

//   const submitHandler= (e) => {
//     setIsSubmitting(true);
//   }



//   useEffect(() =>{

//   }, [productss])


//   return (
//     <div className='container-md'>
     
     
//          <div className="form-floating m-3 ">
//             <input type="text" className="form-control" id="floatingInput" placeholder="name" value={details.name}
//               required onChange={handleChange("name")}/>
//             <label htmlFor="floatingInput">Name</label>
//           </div>
//           <div className="form-floating m-3 ">
//             <input type="text" className="form-control" id="floatingInput" placeholder="category" value={details.category}
//               required onChange={handleChange("category")}/>
//             <label htmlFor="floatingInput">Category</label>
//           </div>
//           <div className="form-floating m-3 ">
//             <input type="text" className="form-control" id="floatingInput" placeholder="size" value={details.price}
//               required onChange={handleChange("price")}/>
//             <label htmlFor="floatingInput">Fish Size</label>
//           </div>
//           <div className="form-floating m-3 ">
//             <input type="text" className="form-control" id="floatingInput" placeholder="quantity" value={details.countInStock}
//               required onChange={handleChange("countInStock")}/>
//             <label htmlFor="floatingInput">Quantity</label>
//           </div>
//           <div className="form-floating m-3 ">
//             <input type="text" className="form-control" id="floatingInput" placeholder="price" value={details.size}
//               required onChange={handleChange("size")}/>
//             <label htmlFor="floatingInput">Price</label>
//           </div>
//           <div className="form-floating m-3 ">
//             <input type="text" className="form-control" id="floatingInput" placeholder="description" value={details.des}
//               required onChange={handleChange("des")}/>
//             <label htmlFor="floatingInput">Description</label>
//           </div>
//           <div className="form-floating m-3">
//               <input className='form-control'
//                 id="image"
//                 type="text"
//                 placeholder="Insert Image"
//                 value={details.image}
//                 onChange={handleChange("image")} />
//                 <label for="floatingInput">Image</label>
//             </div>
//           <div className="form-floating m-3 ">            
//           <div class="input-group">
//             <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" 
//             aria-label="Upload" required onChange={handleChange("image")}/>
//             <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
//            </div>
      
//           </div>
//           <div>              
//               <button className="primary" type="submit" onClick={submitHandler}>
//                   Insert
//               </button>
//           </div>
     
//     </div>
//   );
// }
