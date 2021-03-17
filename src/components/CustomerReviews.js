
import React from 'react';

import Hero2 from './Hero2';
import CustomerReviews2 from './CustomerReviews2';

// import { Link } from 'react-router-dom';

const CustomerReviews = () => {
    return (

    <div> 

        <div className="container">
            <div className="row align-right">
                
                <div className="col-md-4">
                <img src={require('../assets/img/joseph-ike.png')} alt="image" />
                <h6>Joseph Ike</h6>
                <p>In Ikeja <bold>CUSTOMER</bold></p>
                <small>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                </small>
                </div>

                <div className="col-md-4">
                <img src={require('../assets/img/adetola-fashina.png')} alt="image" />
                <h6>Adetola Fashina</h6>
                <p>Ibadan <bold>CUSTOMER</bold></p>
                <small>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
                unt ut voluptate aute id deserunt nisi.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </small>
                </div>

                <div className="col-md-4">
                <img src={require('../assets/img/emmanuel-fayemi.png')} alt="image" />
                <h6>Emmanuel Fayemi</h6>
                <p>In Akoka <bold>CUSTOMER</bold></p>
                <small>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                </small>
                </div>

                <div className="col-md-4">
                <img src={require('../assets/img/chisom-obiora.png')} alt="image"/>
                <h6>Chisom Obiora</h6>
                <p>In Magodo <bold>VENDOR</bold></p>
                <small>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                </small>
                </div>

                <div className="col-md-4">
                <img src={require('../assets/img/adeyemi.png')}alt="image"  />
                <h6>Adunoluwa Adeyemi</h6>
                <p>Iwo Road <bold>VENDOR</bold></p>
                <small>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis
                 deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
                unt ut voluptate aute id deserunt nisi.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </small>
                </div>

                <div className="col-md-4">
                <img src={require('../assets/img/okeke.png')} alt="image" />
                <h6>Chidi Okeke</h6>
                <p>In Somolu <bold>VENDOR</bold></p>
                <small>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </small>
                </div>

            </div>

        </div>
        <Hero2 />
        <CustomerReviews2 />
    </div>

        
    )
}

export default CustomerReviews;