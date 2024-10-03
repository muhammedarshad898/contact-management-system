import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'
import axios from 'axios';
import { toast } from 'react-toastify';


function Edit() {
       const [values,setvalues]=useState({
              id:'',
              fullname:"",
              imageurl:"",
              relation:"",
              phonenumber:"",
              email:"",
              whatsupnumber:'',
              instaid:""

       })
      
       const{id}=useParams();
       useEffect(()=>{
              axios.get('https://cm-server2.onrender.com/contacts/'+id)
             .then(res =>{
              console.log(res)
              setvalues({...values, fullname: res.data.fullname, imageurl: res.data.imageurl, relation:res.data.relation,phonenumber:res.data.phonenumber,email:res.data.email,whatsupnumber:res.data.whatsupnumber,instaid:res.data.instaid})
              console.log(values)

             })

             

       },[])
       // handlesubmit=(e)=>{
       //        e.preventDefault();
       //        axios.put('http://localhost:4000/contacts/'+id,values)
       //       .then(res =>{
       //        navigate('/')
             
       //       }

       //       )
       //        .catch(err=>console.log(err))


       // }
    const handleedit=()=>{
       axios.put('https://cm-server2.onrender.com/contacts/'+id,values)
       .then(res=>{
              console.log(res)
              toast.success('updated successfully')
       })
    }
          
 


  return (
   <>
    <div className='d-flex justify-content-center align-items-center' style={{height:"90vh"}}>
      <div className='w-75 border shadow container'>
        
       <Row className='align-items-center'>
        <Col>
        <h3 className='mt-3 mb-3 text-info'>Edit Contact</h3>
       
        
        <input type="text"  className='form-control w-50 mt-3' placeholder='Full Name' value={values.fullname} onChange={e=> setvalues({...values,fullname:e.target.value})}
 />
        <input type="text"  className='form-control w-50 mt-3' placeholder='image url' value={values.imageurl}  onChange={e=> setvalues({...values,imageurl:e.target.value})}
 />
 
        <input type="text"  className='form-control w-50 mt-3' placeholder='Relation' value={values.relation} onChange={e=> setvalues({...values,relation:e.target.value})}
 />
        <input type="text"  className='form-control w-50 mt-3' placeholder='phone number' value={values.phonenumber} onChange={e=> setvalues({...values,phonenumber:e.target.value})}
 />
        <input type="text"  className='form-control w-50 mt-3' placeholder='Email' value={values.email} onChange={e=> setvalues({...values,email:e.target.value})}
 />
        <input type="text"  className='form-control w-50 mt-3' placeholder='Whatsup number' value={values.whatsupnumber} onChange={e=> setvalues({...values,whatsupnumber:e.target.value})}
 />
        <input type="text"  className='form-control w-50 mb-3 mt-3' placeholder='Instagram Id'value={values.instaid}onChange={e=> setvalues({...values,instaid:e.target.value})}
 />
        <div className='mt-3 mb-3 d-flex'><button className='btn btn-success' onClick={handleedit}>Save contact</button><Link to={'/list'} className='ms-2'><button className='btn btn-info'>Back</button></Link>
        
        </div>
        </Col>
        <Col>
        <img src={values.imageurl} style={{height:"300px"}} alt="" /></Col>

        </Row>
        
        </div>
        </div>
       
      
   </>
  )
}

export default Edit