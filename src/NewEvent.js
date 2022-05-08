import { db } from "./firebase"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function NewEvent() {

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");

  const [user] = useAuthState(auth)
  let username = ""

  if (user)
    username = user.displayName

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, "events"), {
        name: username,
        event_name: title,
        event_date: date,
        type: type,
        description: description,
        is_active: true,
        created: Timestamp.now()
      })
    } catch (err) {
      alert(err)
    }
    navigate("/");
  }

  return (
    <div>
      <h1>הוספת אירוע חדש</h1>
      <form onSubmit={handleSubmit}>
        <p><label>שם יוצר האירוע: </label><input type="text" name="name" value={username} readOnly /></p>
        <p><label>כותרת האירוע: </label><input type="text" name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="" required /></p>
        <p><label>תאריך: </label><input type="date" onChange={(e) => setDate(e.target.value)} required /></p>
        <p>
          <label>סוג אירוע: </label>
          <select onChange={(e) => setType(e.target.value)} required>
            <option value="type1">type1</option>
            <option value="type2">type2</option>
          </select>
        </p>

        <p><label>פירוט: </label><textarea rows="5" cols="30"
          onChange={(e) => setDescription(e.target.value)}
          placeholder=""></textarea></p>
        <p><button className="btn-add" type="submit">הוסף אירוע</button></p>
      </form>
    </div >
  )
}

export default NewEvent;