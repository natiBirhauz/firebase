import { db, auth } from "./Firebase"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import AdminPer from './AdminPer'
import Header from "./Header";
function NewEvent() {

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [user] = useAuthState(auth)


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, "events"), {
        name: user.displayName,
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
      <Header />
      <AdminPer url="/newevent" />
      <br />
      <div className="box container">
        <h1 className="user-details__title title container">הוספת אירוע חדש</h1>
      </div>
      <div className="container row">
        <div className="box box--sub col">
          <form onSubmit={handleSubmit}>
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
        <div className="box box--sub">
          <div className="user-details__roles container">
            <h2 className="user-details__roles__title">רשימת תפקידים</h2>
            <ol className="user-details__roles__list">
              <li>ספק מזון</li>
            </ol>
            <button className="btn--accent">ערוך</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NewEvent;