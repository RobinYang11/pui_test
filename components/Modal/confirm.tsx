import React, { useState } from 'react';


interface IBaseModalProps{
    visible?:boolean;
}

function BaseModal(){
   
   const [visible,setVisible] = useState(false);
   
   
    
    return(<div>
        baseModal
    </div>)
     
}
export default BaseModal;