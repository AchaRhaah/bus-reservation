import React from 'react'
import mtn_icon from "./assets/mtn_icon.png"
import om_icon from "./assets/om_icon.png"
import visa_card from "./assets/visa_card.png"

import * as styles from './Popup.module.css'
function Popup(){

  function closeModal(){
    document.querySelector("#bg-modal").style.display = "none";
  }


  return(
    <div>
      <div id="bg-modal" className={styles.bg_modal}>
        <div class={styles.modal_content}>
       
            <h1 class={styles.payment_xp}>Choose Payment Method</h1>
            <div class= {styles.container}>
              <div class={styles.payment_option}>
                <div class= {styles.mtn}>
                  <img style= {{width: "80px", height: "50px"}} src={mtn_icon} alt="photo" />
                  <input class={styles.radio_button} type="radio" id="html" name="fav_language" value=""/>
                </div>
                <div class= {styles.om}>
                  <img style= {{width: "80px", height: "50px"}} src={om_icon} alt="photo" />
                  <input class={styles.radio_button} type="radio" id="html" name="fav_language" value=""/>
                </div>
                <div class={styles.visa}>
                  <img style= {{width: "80px", height: "50px"}} src={visa_card} alt="photo" />
                  <input  class={styles.radio_button} type="radio" id="html" name="fav_language" value=""/>
                </div>
              </div>
              <div class={styles.account_details}>
                <p>Account number</p>
                <input class={styles.text_input} placeholder="Account number" type="text"/>
                <button id="button">Make payment</button>
              <div>
            </div>
            <div className={styles.close} onClick={closeModal}>+</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Popup
