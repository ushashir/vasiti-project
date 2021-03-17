import React from 'react';

const Hero = () => {
    return (
        <div className="container">
            <div class="row p-4 p-md-5 mb-4 text-black rounded bg-light">
                <div class="col-md-6 px-0">
                <h1 class="display-4 fst-italic">Amazing Experiences from our wonderful customers</h1>
                <p class="lead my-3">Here is what our customers and vendors are saying about us, you can share your stories with us too</p>
                <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
                
            </div>
                <div class="col-md-6">
                    <img src={require('../assets/img/t-image.png')} />
                </div>
             
            </div>

            <div class="row p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <div class="col-md-6">
                    <img src={require('../assets/img/bbl.png')} />
                </div>
                <div class="col-md-6 px-0">
                    <h3 class="display-7 fst-italic">Tolu and Joy's Experience</h3>
                    <p class="lead my-3" >I had the best experience shopping with vasiti. Usability of the website was
                     great, very good customer service, an all round great experience. 
                     I would definately be coming back! I had the best experience shopping 
                     with vasiti. Usability of the website was great, very good customer service, an 
                     all round great experience. I would definately be coming back!</p>
                    <p class="lead mb-0"><a href="#" class="text-white fw-bold">SHARE YOUR OWN STORY...</a></p>
                    
                </div>
                
             
            </div>

    </div>
        
    )
}

export default Hero;