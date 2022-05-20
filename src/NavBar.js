import React, {useRef} from 'react';
import './App.css';
import Items from './Items';
function NavBar(props) 
{
  const inputEl=useRef("");

  const getSearchTerm=()=>{
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <>
    <div className='content'>
        <h2>Customer Successs Manager</h2>
        <input type="text" placeholder='Add by Name or email' className='inputBox' ref={inputEl} value={props.searchTerm}onChange={getSearchTerm}/>

        <button className='buttonStyle' onClick={()=>{props.addition(props.members)}} >Add CSM </button>

        {props.members.length===0?<h1 className='App'>No Members to Display, Please! Add Members</h1>:
        props.members.map((item)=>{
            return <Items cont={item} key={item.sno} onDelete={props.onDelete} addition={props.addition}/>
        })
        }
        
    </div>
    
    </>
      
    
  );
}

export default NavBar;