import React from 'react';
import './App.css';
import Delete from './delete.png';

function NavBar(props) {

  return (
    <>
    <div className="card">
          <div className="circle">{props.cont.short}</div>

          <div className="username" onClick={()=>{props.addition(props.cont)}} >
            <h3>{props.cont.name}</h3>
            <h5 className='text2'>{props.cont.post}</h5>
          </div>

          <div className="delete" onClick={()=>{props.onDelete(props.cont)}}>
            <img src={Delete} alt="Delete" className='icon'/>
          </div>
        </div>
    
    </>
      
    
  );
}

export default NavBar;