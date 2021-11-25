import React from "react";
import '.././App.css';

function Button(){
    
        function bttn(){
            alert("Button is clicked");
          }
        
          return(
        <div>
        <button className="btnn" onClick={bttn}>Primary</button>
        </div>
    );
}
export default Button;