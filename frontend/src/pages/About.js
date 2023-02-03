import React from "react";
import Header from '../components/Header';


function About(){
    return(
        <>
        <Header/>
       <div className="header">
       <p>
        The following application was created by Pauline. 
        This product app displays a list of products that a user 
        can save .
        </p>
        <p>
        Click on the "Add + " button to add a product to your cart app. 
        Use the search bar to find the latest books by name, author or
        description
        </p>
       </div>
    </>
    )
}

export default About;