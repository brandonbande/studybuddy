//Add all imports
import React from 'react'
import { useState , useEffect} from 'react'; // to set values and state
import {db} from './firebase-config' //database object from config
import {addDoc, collection  , deleteDoc, doc, getDocs, updateDoc} from 'firebase/firestore' //firestore functions

function SampleCrud() {
    //States to be use
    const [users ,setUsers] = useState([]); //array of all users
    const usersCollectionRef = collection(db,'user2'); //references to the actual collection
    const [newName ,setNewName] = useState(''); //for username
    const [newAge ,setNewAge] = useState(0); //for the age
    const [count,setCount] = useState(0) //to allow refresh in the useEffect function
    
    //Create a record using async
    const createUser = async () =>{
        await addDoc(usersCollectionRef,{name:newName,age:Number(newAge)}) //usersCollectionRef points to the Firestore Collection to be used , second dict is for info to be added
        clearTextFields()//clear all text fields in page
        setCount(count+1) //Change State of count to trigger a refresh 
      }
    //Clear all textfielsds  
    const clearTextFields = () => {
        const inputs = document.querySelectorAll('input[type="text"]'); //get all the textfields
        inputs.forEach((input) => (input.value = ""));//set value in textfield to empty string
        setNewAge(0) //reset age to 0
        setNewName('')//reset age to empty string
      }
      //update a user  
      const updateUser = async (id,age)=>{ //send document id to the function and the variable to be changed
        const userDoc = doc(db,'user2',id) //point out to the specific document to be added
        const newFields = {age:age+1}//create new variable Age and create key value pairs of info to be added
        await updateDoc(userDoc,newFields) //update the document
        setCount(count+1) //trigger a page refresh to the document
      }
      //delete a user
      const deleteUser = async (id)=>{ // we send in id only 
        const userDoc = doc(db,'user2',id) //point ou to specific doc
        await deleteDoc(userDoc) //delete in Firestore
        setCount(count+1) // force a refresh
      }
    //useEffect to refresh the list whenever the count value changes
    useEffect(
        ()=>{
          const getUsers = async()=>{
            const data = await getDocs(usersCollectionRef) //get documents in the referenced location
            setUsers(data.docs.map((doc)=>({ //map through the documents
              ...doc.data(),id:doc.id //adding users specifically without other metadata
            })))
          };
    
          getUsers()//trigger a run of the function
        },[count]//trigger on every change of the value of count 
      )


  return (
    <div className='SampleCrud'>
        <div className='AddSection'>
            <input className='InputSection' placeholder='Name' type='text' onChange={(event)=>{setNewName(event.target.value)}}/>
            <input className='InputSection' placeholder='Age' type='number' onChange={(event)=>{setNewAge(event.target.value)}} />
            <button onClick={createUser}>Create User</button>
        </div>
        <div className='ShowSection'>
            {users.map((user)=>{ //map Users array with identifier being user
            return( // for each user we return the user item and give out user age and user name then add update and delete buttons
            <div className='itemSection'> 
                {user.name}
                : {user.age} 
                <button onClick={()=>{updateUser(user.id ,user.age) }}>Increase Age</button>
                <button onClick={()=>{deleteUser(user.id)}}>Delete User</button>
            </div>
            )
            })} 
        </div>
    </div>
  )
}

export default SampleCrud