import React from 'react';
import pic from '../images/e.jpg';


export default function HomeScreen() {
  return (
    
        <div className="container">

          <div className="row mt-5">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <img src={pic} className="img-fluid" />          
            </div>
            <div className="col-12 col-lg-6">
              <h2 className='header'>
                About Us
              </h2>
              <p>
                Ravindu_M is a digital platform that allows ornamental fish farmers to advertise their products online and will help to attract exporters.
                The integrated supply and demanding forecsting system will help farmers to decission based on the predictions and will notify it the system sees 
                any overbreeding of a specific species in the future.
              </p>
            </div>
          </div>
          <h2>Our aim</h2>
          <ul>
            <li>
              To build up a network with ornamental fish exporters and farmers.
            </li>
            <li>
              To improve the standard of living of farmers by increasing ornamental fish exports.
            </li>
            <li>
              To stop overbreeding of fish species.
            </li>
            <li>
              T
            </li>
          </ul>
        </div>
      
    
  );
}
