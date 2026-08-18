import Student from "./Student";

function App(){
    return(
  <>
  <h1>Student Profile</h1>
  <Student name="Aryan"
  age={18}
  department="Information Technology"
  college="Government Polytechnic Awasari" />

      <Student
        name="Purvesh"
        age={19}
        department="Computer Science"
        college="GP Awasari"
      />

      <Student
        name="Pruthviraj Bhau Rudhyapasla manus aaapla ayushybhar saglyat khas"
        age={18}
        department="Information Technology"
        college="Gp Awasari"
      />
        </>
    );
}
export default App;