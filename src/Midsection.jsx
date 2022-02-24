import React from 'react'
import './Midsection.css'
import img4 from "./assets/img4.jpg"
import img5 from "./assets/img5.jpg"
import Popup from './Popup';

function Midsection(){

  function openModal(){
    document.querySelector(".bg-modal").style.display = "flex";
    window.onscroll = null;
  }
  return(
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}} >
      <Popup />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet"></link>
      <div class="about">
        <div class="img4">
        <img class="photo2" src={img4} alt="photo" />
        </div>
        <div class="about_child">
          <h2><span><strong>About Us</strong></span></h2>
          <p class="paragraph"> lectus ultrices aliquam duis.
            Dignissim tellus dui mi dolor sem senectus tincidunt rutrum erat fermentum.
             Sapien mollis. Eros mus. Rutrum.Dignissim tellus dui mi dolor sem senectus tincidunt rutrum erat fermentum.
             Sapien mollis. Eros mus. Rutrum. </p>
        </div>
      </div>

      <div className='modal-btn-container'>
        {/* <button className='modal-btn-container' onClick={openModal}>Show Modal</button> */}
      </div>


      <div class="services">
        <div class="service_child">
          <h2><span><strong>Services</strong></span></h2>
            <p class="paragraph">Felis lectus ultrices aliquam duis.
            Dignissim tellus dui mi dolor sem senectus tincidunt rutrum erat fermentum.
            Sapien mollis.Dignissim tellus dui mi dolor sem senectus tincidunt rutrum erat fermentum.
             Sapien mollis. Eros mus. Rutrum.Dignissim tellus dui mi dolor sem senectus tincidunt rutrum erat fermentum.
             Sapien mollis. Eros mus. Rutrum.</p>
        </div>
        <img class="photo2" src={img5} alt="photo" />
      </div>
    </div>
  )
}
export default Midsection
