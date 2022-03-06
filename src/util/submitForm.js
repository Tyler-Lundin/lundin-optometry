import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

function submitForm(name, email, message) {
    const newDate = new Date();
    const yyyy = newDate.getFullYear();
    let mm = newDate.getMonth() + 1; // Months start at 0!
    let dd = newDate.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const today = dd + mm + yyyy;
    var time = new Date().toJSON().substring(10,19).replace('T',' ');

  const db = getDatabase(app);
  set(ref(db, 'messages/' + `${today}/` + `${name}-${time}`), {
    username: name,
    email: email,
    message: message
  });
}

export default submitForm