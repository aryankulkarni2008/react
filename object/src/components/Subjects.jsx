function Subject({subject,setSubject}){
    const addSubject=()=>{
        setSubject([
            ...subject,
            "React"
        ]);
    };
    return(
        <div className="card">
            <h2>Subjects</h2>
            
        {subject.map((subject, index) => (
          <li key={index}>
            {subject}
          </li>
        ))}
        <button onClick={addSubject}>Add React</button>
        </div>
    )
}
export default Subject;