import React from "react";

function About({image,about}){
    const imge = "https://via.placeholder.com/215" + image;

    return(
        <aside>
            <img src = {imge} alt= "blog logo"/>
            <p>{about}</p>
        </aside>
    )

}
export default About;