import {handleName,handleEmail,
  handleAge,handleCourse} from "./formFunctions";

  function App(){
    return (
      <div className="container">
        <h1>Student Registration</h1>
        <div className="form">
          <label>Name:</label>
          <input type="text"
          placeholder="Enter your Name"
          onChange={handleName}></input>
        <label>Email:</label>
        <input type="email"
        placeholder="Enter your Email"
        onChange={handleEmail}></input>
      <label>Age:</label>
      <input type="number"
      placeholder="Enter your Age"
      onChange={handleAge}></input>
      <label>Courese</label>
      <select onChange={handleCourse}>
          <option value="">Select course</option>
          <option value="react">React</option>
          <option value="Node.js">Node.js</option>
          <option value="MongoDb">MongoDb</option>
      </select>
        </div>
      </div>

    );
  }
export default App;