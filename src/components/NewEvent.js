import { db, auth } from "./Firebase"
import { collection, addDoc, Timestamp, getDocs } from "firebase/firestore"
import { useRef, useState, useEffect, createElement } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import AdminPer from './AdminPer'
import Header from "./Header";

const NewEvent = () => {
  const navigate = useNavigate();
  const title = useRef("");
  const description = useRef("");
  const date = useRef("");
  const [cats, setCats] = useState([]);
  const [type, setType] = useState("");
  const [user] = useAuthState(auth);
  const [eventStringsRoles, setEventStringsRoles] = useState([]);
  const [catTitles, setCatTitles] = useState([]);

  useEffect(() => {
    const getRoles = async () => {
      setCats([]);
      const data = await getDocs(collection(db, 'roles'));
      data.forEach((e) => {
        const subarr = Object.values(e.data());
        setCatTitles(catTitles => [...catTitles, e.id]);
        setCats(cats => [...cats, subarr]);
      });
    }
    getRoles();
  }, []);

  const chooseAmount = (role) => {
    let amount;
    if (role.target.checked === true)
      amount = prompt("נבחר תפקיד " + cats[role.target.id.charAt(0)][role.target.value] + ". הכנס כמות נדרשת:");
    while (!Number.isInteger(amount)
        {
           prompt("לא הוכנס מספר")
           amount = prompt("נבחר תפקיד " + cats[role.target.id.charAt(0)][role.target.value] + ". הכנס כמות נדרשת:");
        }
    else {
      setEventStringsRoles(eventStringsRoles.filter((roleInList) => {
        const arr = roleInList.split('-');
        const roleStr = arr[0] + '-' + arr[1];
        return roleStr !== role.target.id;
      }
      ));
      return;
    }

    if (amount <= 0) {
      alert("לפחות 1");
      role.target.checked = false;
      return;
    }

    setEventStringsRoles(eventStringsRoles => [...eventStringsRoles, role.target.id + "-" + amount])
  }

  const showCats = (index) => {
    const div1 = document.createElement('div');
    div1.key = index;
    div1.id = 'titleCat';

    const h3 = document.createElement('h3');
    h3.innerHTML = (catTitles[index]);
    div1.appendChild(h3);
    document.getElementById('showCats').replaceChildren(div1);

    cats[index].map((role, indexRole) => {
      const div = document.createElement('div', { key: indexRole });
      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', (index + '-' + indexRole));
      input.onchange = (e) => chooseAmount(e);
      input.value = indexRole;

      const label = document.createElement('label');
      label.setAttribute('htmlFor', index + '-' + indexRole)
      label.textContent = role;
      div.appendChild(input)
      div.appendChild(label)

      document.getElementById('titleCat').appendChild(div);
    });
  }

  const addEvent = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, "events"), {
        name: user.displayName,
        event_name: title.current.value,
        event_date: Timestamp.fromDate(new Date(date.current.value)),
        type: type,
        description: description.current.value,
        is_active: true,
        roles: eventStringsRoles,
        created: Timestamp.now()
      })
    } catch (err) {
      alert(err)
    }
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
          <form onSubmit={addEvent}>
            <p><label>כותרת האירוע: </label><input ref={title} type="text" name="title" required /></p>
            <p><label>תאריך: </label><input ref={date} type="date" required /></p>
            <p>
              <label>סוג אירוע: </label>
              <select onChange={(e) => setType(e.target.value)} required>
                <option value="type1">type1</option>
                <option value="type2">type2</option>
              </select>
            </p>

            <p><label htmlFor="desc">פירוט: </label><textarea ref={description} rows="5" cols="30" id="desc" /></p>
            <p><select id="showCat" onChange={(e) => showCats(e.target.value)}>
              <option defaultValue hidden>בחר קטגוריה</option>
              {catTitles.map((title, index) => {
                return (
                  <option value={index} key={index}>{title}</option>
                )
              })}
            </select></p>

            <p id="showCats"></p>

            <p><button className="btn--accent" type="submit">הוסף אירוע</button></p>
          </form>
        </div>
        <div className="box box--sub">
          <div className="user-details__roles container">
            <h2 className="user-details__roles__title">רשימת תפקידים</h2>
            <ol className="user-details__roles__list">
              {eventStringsRoles.map((role) => {
                const nums = role.split('-');
                return (
                  <li key={role}>{cats[nums[0]][nums[1]]}, כמות: {nums[2]}</li>
                )
              })}
            </ol>
            <button className="btn--accent">ערוך</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NewEvent;
