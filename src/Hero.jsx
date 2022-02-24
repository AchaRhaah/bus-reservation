import React from "react";
function Hero(){
    return(
        <div class="banner">
             
        <div class="banner--title">Book a Ticket</div>
        <p class="banner--description"><i>Travel Easy!</i></p>

       <div className='form-container'>
       <div class="container">
            {/* <div class="search_wrap search_wrap_1"> */}
                <div class="search_box">
                    <p>Departure</p>
                    <input type="text" class="input" placeholder="..."/>
                    <div class="btn btn_common">

                    </div>
                </div>
            {/* </div> */}
            {/* <div class="search_wrap search_wrap_2"> */}
                <div class="search_box">
                    <div class="btn btn_common">

                    </div>
                    <p>Destination</p>
                    <input type="text" class="input" placeholder="..."/>
                </div>
            {/* </div> */}
        </div>
        <div class="container">
            {/* <div class="search_wrap search_wrap_3"> */}
                <div class="search_box">
                    <p>Date</p>
                    <input type="text" class="input" placeholder="..."/>
                    <div class="btn btn_common">

                    </div>
                </div>
            {/* </div> */}
            {/* <div class="search_wrap search_wrap_4"> */}
                <div class="search_box">
                    <div class="btn btn_common">

                    </div>
                    <p>Time</p>
                    <input type="text" class="input" placeholder="..."/>
                </div>
            {/* </div> */}
        </div>
        
       </div>
        
        {/* <div class="container">
            <div class="search_wrap search_wrap_5">
                <div class="search_box2">
                    <input type="text" class="input1" placeholder="Check agency"/>
                    <div class="btn btn_common">

                    </div>
                </div>
            </div>
        </div>  */}
</div>
    )
}
export default Hero