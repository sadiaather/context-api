import Image from 'react-bootstrap/Image';
import { useState } from 'react';

import { styled } from '@mui/material/styles';

import Button from 'react-bootstrap/Button';


function Hero() {
     let [isFirstImage,setIsFirstImage] = useState(true)
     let img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIJJQJym3lu0VEkKG8iHizr-3Q0Y00NPnYQpn9j-5yUkrclw3GF-f85Q&s"
     let img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3-XW7yKz00gvASkQP1x8CGOh65OJSPa_SSicFz5cttQ&s"
     
  return (


    <div className =" container-fluid row flex-lg-row-reverse align-items-center g-5 py-5"> <div className="col-10 col-sm-8 col-lg-6"> <img  src={isFirstImage ? img1 : img2} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/> </div>
     <div className="col-lg-6"> <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Change image by using contex api</h1> 
     <p class="lead">Quickly change image by click a button using contex api 
      .</p> 
       <div className="d-grid gap-2 d-md-flex justify-content-md-start"> 
        <button   onClick={() => setIsFirstImage(!isFirstImage)}  type="button" className="btn btn-danger btn-lg px-4 me-md-2">Click</button>
          </div> </div> </div>
  );
}
export default Hero;