// import React from 'react';
import './App.css';
import './NavBar'

import NavBar from './NavBar';
import React, { useState } from 'react';

function App() 
{

  const onDelete=(item)=>{
    setMembers(members.filter((e)=>{
      return e!==item;
    }))
  };

  // const addition=(item)=>{
  //   // if(item.email)
  //   const newMembers={
  //     name:item[0].name,
  //     sno:item[0].sno,
  //     post:item[0].post
  //   }
  //   setMembers([...members,newMembers]);
  // }
  // const filtering=[];

  const addition=(item=>{
    setManagers(managers.filter((e)=>{return e!==item;}))
    const newMembers={
          name:item.name,
          sno:item.sno,
          post:item.post
        }
        // AddingMembers(newMembers);
        // filtering.splice(filtering.length-1,0,newMembers);
        // console.log(filtering);
        setMembers([...members,item]);

        
  });

  // const AddingMembers=(item)=>{
  //   setMembers([...members,item]);
  // }

  const [managers,setManagers]=useState([
    {
      sno:1,
      name:"Chilman Malhotra",
      post:"Client Manager",
      email:"Chilman@spottabl.com",
      short:"CM"
    },
    {
      sno:2,
      name:"Sudha Rajpoot",
      post:"Client Manager",
      email:"Sudha@spottabl.com",
      short:"SR"
    },
    {
      sno:3,
      name:"Sikha Sharma",
      post:"Senior recruiter",
      email:"Sikha@spottabl.com",
      short:"SS"
    },
    {
      sno:4,
      name:"Rajesh Rajoria",
      post:"Talent Acquisition Specialist",
      email:"Rajesh@spottabl.com",
      short:"RR"
    },
    {
      sno:5,
      name:"Pritam Kumar",
      post:"Client Manager",
      email:"Pritam@spottabl.com",
      short:"PK"
    },
    {
      sno:6,
      name:"Arun Govil",
      post:"Testing Department",
      email:"Arun@spottabl.com",
      short:"AG"
    },
    {
      sno:7,
      name:"Kapil Sharma",
      post:"Software Developer",
      email:"Kapil@spottabl.com",
      short:"KS"
    },
    {
      sno:8,
      name:"Mashhoor Gulati",
      post:"Software Developer ",
      email:"Mashhoor@spottabl.com",
      short:"MG"
    },
    {
      sno:9,
      name:"Asha Ojha",
      post:"Client Manager",
      email:"Asha@spottabl.com",
      short:"AO"
    }
  ]);

  const [members,setMembers]=useState([
    {
      sno:1,
      name:"Chilman Malhotra",
      post:"Client Manager"
    },
    {
      sno:2,
      name:"suman",
      post:"Software Engineer"
    },
    {
      sno:3,
      name:"Sudha",
      post:"Intern"
    },
    {
      sno:4,
      name:"Sudha",
      post:"Intern"
    }
  ]);
  const [searchTerm,setSearchTerm]=useState("");
  const[searchResult,setSearchResult]=useState([]);
  const searchHandler=(searchTerm)=>{
      setSearchTerm(searchTerm);
      if(searchTerm!=="")
      {
        const newList=managers.filter((manager)=>{
        return Object.values(manager).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
        });

        setSearchResult(newList);
      }
      else
      {
        setSearchResult(members);
      }
  };


  return (
    <>
    
    
    <div className='main'>
      <>
        <div className="nav">
          <div>
          <img src="https://media-exp1.licdn.com/dms/image/C560BAQHKJ7bgUY5kjA/company-logo_200_200/0/1615143047817?e=2147483647&v=beta&t=QvGVaP8GxB8aHUb9Y887DfWNwXOQZZVjCaQAALUjo2c" alt="Company Logo" className='img'/>
          </div>
          <div className='text'>
            <h1>YOUR SPOTTABL TEAM</h1>
            <h4 className='text2'>Spottabl supports you all throughout</h4>
          </div>
          
          
        </div>
        <NavBar members={searchTerm.length<1?members:searchResult} onDelete={onDelete} searchTerm={searchTerm} searchKeyword={searchHandler} addition={addition}/>

      </> 
    
    </div>
    </>
      
    
  );
}

export default App;
