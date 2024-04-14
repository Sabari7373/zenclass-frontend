import React from 'react';
import './AdminCertificate.css'


function AdminCertificate () {
    return(
        <div className='certificates'>
            <h1 className='certificatesHeading'>Certificates
            
            </h1>
            <div className='certificatesInside'><br/>
              
                <h3>Give an Access to the Students Who are all Completed the Tasks</h3>  

                <a href='/admin/dashboard'className='back-button' >Back</a>       
      
            </div>            
        </div>
    )
}

export default AdminCertificate