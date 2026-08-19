function Student({student,setStudent}){
    const changecity=()=>{
        setStudent({
            ...student,
            city:"Mumbai"
        });
    };
    return(
        <div className="card">
            <h1>Student Information</h1>
            <p>Name</p>{student.Name}
            <p>Age:</p>{student.Age}
            <p>City:</p>{student.city}
            <button onClick={changecity}>Change City</button>
        </div>
    );
}
export default Student;