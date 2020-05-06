import React from 'react';


const ProfileCard = (props) => {
    const ChoosenUser = props.user
    console.log(ChoosenUser)
    return (
     <div>   
    {ChoosenUser === 'Pick An User' ? 'Pick An User' : 
  <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={ChoosenUser.avatar} />
    </figure>
  </div>
  <div className="card-content">
  
    <div className="content">
    <p>{ChoosenUser.first_name}</p>
    <p>{ChoosenUser.last_name}</p>
    <p>{ChoosenUser.email}</p>
    </div>
  </div>
  </div>
  }
  </div>
    )
  }
  export default ProfileCard;