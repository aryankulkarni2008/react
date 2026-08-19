import Student from "./components/Student";
import Subject from "./components/Subjects";
import { useState } from "react";

function App(){
  const [student,setStudent]=useState({
    name:"",
    Age:"",
    city:"",
    course:""
  });
  const[subject,setSubject]=useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);
  return(
    <div className="app">
      <h1>Student Manager</h1>
      <Student 
      student={student}
      setStudent={setStudent}/>
      <Subject 
      subject={subject}
      setSubject={setSubject}/>
    </div>
  );
}
export default App;