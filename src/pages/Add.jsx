import React from 'react'
import { Link } from 'react-router-dom'
import { addcontactsapi } from '../services/allapi'
import { useState } from 'react'
import { toast } from 'react-toastify'

function Add() {
  const[contact,setcontact]=useState({
    fullname:"",imageurl:"",relation:"",phonenumber:"",email:"",whatsupnumber:"",instaid:""
  })
  const handleadd=async()=>{
    console.log(contact);
    const{fullname,imageurl,relation,phonenumber,email,whatsupnumber,instaid}=contact
    if(!fullname||!imageurl||!relation||!phonenumber||!email||!whatsupnumber||!instaid){
      toast.warning("invalid input")
    }
    else{
      const result=await addcontactsapi(contact)
      if(result.status==201){
        toast.success("contact saved")
        setcontact({
          fullname:"",imageurl:"",relation:"",phonenumber:"",email:"",whatsupnumber:"",instaid:""
        })
      }
      else{
        toast.error("failed")
        console.log(result)
      }
      
     
    }
  }
  return (
   
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:"90vh"}}>
      <div className='w-75 border shadow container'>
        
        <h3 className='mt-3 mb-3 text-info'>Add New Contacts</h3>
        
        <input type="text"  className='form-control w-50 mt-3' placeholder='Full Name' onChange={(e)=>{setcontact({...contact,fullname:e.target.value})}} />
        <input type="text"  className='form-control w-50 mt-3' placeholder='image url'onChange={(e)=>{setcontact({...contact,imageurl:e.target.value})}} />
        <input type="text"  className='form-control w-50 mt-3' placeholder='Relation'onChange={(e)=>{setcontact({...contact,relation:e.target.value})}} />
        <input type="text"  className='form-control w-50 mt-3' placeholder='phone number'onChange={(e)=>{setcontact({...contact,phonenumber:e.target.value})}} />
        <input type="text"  className='form-control w-50 mt-3' placeholder='Email'onChange={(e)=>{setcontact({...contact,email:e.target.value})}} />
        <input type="text"  className='form-control w-50 mt-3' placeholder='Whatsup number'onChange={(e)=>{setcontact({...contact,whatsupnumber:e.target.value})}} />
        <input type="text"  className='form-control w-50 mb-3 mt-3' placeholder='Instagram Id'onChange={(e)=>{setcontact({...contact,instaid:e.target.value})}} />
        <div className='mt-3 mb-3 d-flex'><button className='btn btn-success' onClick={handleadd}>Save contact</button><Link to={'/list'} className='ms-2'><button className='btn btn-info'>Back</button></Link>
        </div>
        </div>
      </div>
  
    </>
  )
}

export default Add