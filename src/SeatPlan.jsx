import React from "react";
import * as styles from './SeatPlan.module.css';
import Popup from "./Popup";
function SeatPlan(){
    function openModal(){
        document.querySelector("#bg-modal").style.display = "flex";
        window.onscroll = null;
    }
    return(
        <div style={{display:'flex',justifyContent:'center',marginBottom:'3rem'}}>
             <Popup/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet"></link>
            <div class= {styles.sp_container}>
                <div class={styles.sub_navbar}>
                <div className={styles.overlay2}>
                    <h1 class={styles.agency}>Mussango</h1>
                </div>
                </div>
                <div class={styles.middle_container}>
                    <div class={styles.seates_xp}>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon} ${styles.selected}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon} ${styles.booked}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon} ${styles.selected}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon} ${styles.selected}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon} ${styles.booked}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    <i class={`fas fa-trash ${styles.seatIcon}`}></i>
                    
                    
                    
                    </div>
                    <div class={styles.squares}>
                        <div class={styles.square2}>
                            <div class={styles.side}>
                                <div  style={{background: "#4A4A4A"}} class={styles.square}></div>
                                <p>Available</p>
                             </div>
                            <div class={styles.side}>
                                <div style={{background: "green"}} class={styles.square}></div>
                                <p>Selected</p>
                            </div>
                            <div class={styles.side}>
                            <div style={{background: "red"}} class={styles.square}></div>
                            <p>Booked</p>
                            </div>
                            <button class={styles.clear}>clear selection</button>
                        </div>
                        <div class={styles.button}>
                            <button onClick={openModal} class={styles.payment}>Choose payment method</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeatPlan;