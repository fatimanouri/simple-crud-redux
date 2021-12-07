import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import  { useRef ,useState} from 'react';
function App() {

  const [editMode ,seteditMode]=useState("null");
  const User =useSelector(store =>store.User)
  const dispatch = useDispatch();
  const Inputvalue = useRef();

function remove(index) {

  let newUser=[...User];

  newUser.splice(index,1);

  dispatch({type : "set" , payload : newUser})
  
}

function add() {

 if (editMode == null) {

  let newUser=[...User];

  newUser.push(Inputvalue.current.value);

  dispatch({type : "set", payload : newUser})

  Inputvalue.current.value="";
 
  
 }

 else{
  let newUser=[...User];

  newUser.splice(editMode,1,Inputvalue.current.value);

  dispatch({type:"set",payload:newUser})
   
  seteditMode(null);
  
  Inputvalue.current.value="";
 }
}

function update(index) {

  Inputvalue.current.value=User[index];

  seteditMode(index);

  
}
  return (
    <div >
      <input  ref={Inputvalue} type="text"  placeholder="name"/>
      <button onClick={()=>add()}>change</button>
      <br/>

      <hr/>
{
  User.map((item ,index)=> (

    <div style={{display:"flex",alignItems:"center"}}>
          <h3>{item}</h3>
             <button style={{margin:"10px"}} onClick={()=>remove(index)}>remove</button>
             <button style={{margin:"10px"}} onClick={()=>update(index)}>update</button>

    </div>
))
}
  

    </div> 
  );
}

export default App;
