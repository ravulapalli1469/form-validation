import React ,{useState} from 'react';

const App = () => {

  const [name,setName] = useState("venkat")
  let HandleForm = (e) => {
    e.preventDefault(e);
     console.log(e.target[0].value);
  }
  return (
       <form onSubmit ={HandleForm}>
        <label> Enter Value </label>
        <input type ="text" value ={name} onChange = {(e) =>setName(e.target.value.toUpperCase().substring(0,7))}></input> 
        <br/>
        <button> Submit </button>
      </form>
  )
}

export default App;