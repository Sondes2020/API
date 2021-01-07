import React from 'react'

const CardList = ({user}) => {
    return (
        <div className='card'>
            <div className='card-inner' >

            

     <div  className='card-front'  >
<ul>
    <li><strong>name:</strong>{user.name}</li>
    <li><strong>username:</strong>{user.username}</li>
    <li><strong>email:</strong>{user.email}</li>
    <li><strong>street:</strong>{user && user.address && user.address.street }</li>
    
    <li><strong>zipcode:</strong>{user && user.address && user.address.suite && user.address.city && user.address.zipcode}</li>
    <li><strong>geo.ing:</strong>{user && user.geo && user.geo.lat && user.geo.lng}</li>
</ul>
                </div>
     <div className='card-back'  >
         <ul>
         <li><strong>phone:</strong>{user.phone}</li>
         <li><strong>website:</strong>{user.website}</li>
          <li><strong>company:</strong>{user && user.company && user.company.name && user.company.catchPhrase && user.company.bs}</li> 
         </ul>
                   </div> 
            </div>
            
        </div> 
    )
}

export default CardList
