import React from 'react';
import './App.css';
import UserContext from './UserContext';
import DropDown from './Drop';
import ProfileCard from './Card';

function ChoosenUser() {
  const [user,setUser] = React.useState('Pick An User')
  const [loading, setLoading] = React.useState(false)

  const getUser = async(id) =>{
    setLoading(true)
    const req = await fetch(`https://reqres.in/api/users/${id}`)
    const response = await req.json()
    const data = response.data
    setUser(data)
    setLoading(false)
    return data
  }

  return (
    <UserContext.Provider value={{
      getUser:getUser
    }}>
    <div>
      <DropDown />
      {loading ? 'is loading...' : <ProfileCard user={user} /> }
    </div>
    </UserContext.Provider>
  );
}

export default ChoosenUser;
