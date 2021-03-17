import React from 'react';

const Hero2 = () => {
    return (
        <div className="container">
            <div className="row p-4 p-md-5 mb-4 text-black rounded bg-light">
                <div className="col-md-6 px-0">
                <h3 className="display-4 fst-italic">Josiah’s Experience</h3>
                <p>VENDOR</p>
                <p className="lead my-3">I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                <p className="lead mb-0"><a href="#" className="text-white fw-bold">SHARE YOUR OWN STORY</a></p>
                
            </div>
                <div className="col-md-6">
                    <img src={require('../assets/img/wwsb.png') } alt="image"  />
                </div>
             
            </div>

    </div>
        
    )
}

export default Hero2;