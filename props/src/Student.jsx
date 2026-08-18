function Student(props){
    return(
        <div className="student-card">
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
            <h2>{props.department}</h2>
            <h2>{props.college}</h2>
            <button>View Profile</button>
        </div>
    );
}
export default Student;