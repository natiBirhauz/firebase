import { db, logout } from './firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { useNavigate } from 'react-router-dom';

function Form() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [date, setDate] = useState('')

  const [user] = useAuthState(auth)
  let username = ''

  const navigate = useNavigate();
  if(user)
    username = user.displayName
  else
    navigate('/');
    
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

    } catch (err) {
      alert(err)
    }
  }

  return (
    <div>
      <h1>פרופיל</h1>
      <form onSubmit={handleSubmit}>
        <label>שם מלא: </label><input type='text' name='name' value={username} readOnly />
        <p><button className="btn-add" type='submit'>שמור שינויים</button></p>
      </form>
    </div >
  )
}

export default Form;