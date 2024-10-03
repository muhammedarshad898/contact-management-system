import React,{useState,useEffect} from 'react'
import { Row,Col, Button } from 'react-bootstrap'
import { Link,useParams } from 'react-router-dom'
// import { getcontactdetail } from '../services/allapi'

function View() {
  const[detail,setdetail]=useState({})
  useEffect(()=>{getdetail()

  },[])
  const {id}=useParams()
  console.log(detail)

  const getdetail=async()=>{
    const response=await fetch(`https://cm-server2.onrender.com/contacts/${id}`)
    const result=await response.json()
    setdetail(result)
  }
 
  return (
    <>
    <div className='container mt-5'>
      <div className='row'>
        <div>
        <h3 className='text-dark'>View contact</h3>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquid soluta quis natus id explicabo, incidunt dolore, fuga cum obcaecati quas quia libero eum similique quidem ducimus eveniet perspiciatis odit!</p>
        </div>
       
       
      </div>

    </div>
    <div className='container mt-5'>
      <div>
        <Row className='align-items-center'>
          <Col md={4}><img src={detail?.imageurl} className='img-fluid' alt=""style={{height:"300px",width:"100%"}} /></Col>
          <Col md={8}>
          <ul className='list-group w-50 mt-3' style={{border:"unset"}}>
            <li className='list-group-item list-group-action'style={{border:"unset", fontSize:"20px"}}>Name : <span>{detail?.fullname}</span></li>
          </ul>
          <ul className='list-group w-50 mt-3'>
            <li className='list-group-item list-group-action'style={{border:"unset", fontSize:"20px"}}>Phone : <span>{detail?.phonenumber}
              </span></li>
          </ul>
          <ul className='list-group w-50 mt-3'>
            <li className='list-group-item list-group-action'style={{border:"unset",fontSize:"20px"}}>email  : <span>{detail?.email}
              </span></li>
          </ul>
          <ul className='list-group w-50 mt-3'>
            <li className='list-group-item list-group-action'style={{border:"unset",fontSize:"20px"}}>Relation : <span>{detail?.relation}</span></li>
          </ul>
          <ul className='list-group w-50 mt-3'>
            <li className='list-group-item list-group-action'style={{border:"unset",fontSize:"20px"}}>whatsup number : <span>{detail?.whatsupnumber}</span></li>
          </ul>
          <ul className='list-group w-50 mt-3'>
            <li className='list-group-item list-group-action'style={{border:"unset",fontSize:"20px"}}>instagram id : <span>{detail?.instaid}</span></li>
          </ul>
          </Col>
        </Row>
        <Row className='mt-4'>
<Col>
<Link to={'/list'}><Button className='btn btn-success'>Back</Button></Link>
</Col>
        </Row>
      </div>
      

      </div>

   
    </>
  )
}

export default View