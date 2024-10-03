import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col, CardTitle, CardText } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getcontactsapi } from '../services/allapi';
import { deletecontactsapi } from '../services/allapi';
import { toast } from 'react-toastify';


function List() {
  const handledelete=async(id)=>{
    const dresult=await deletecontactsapi(id)
    if (dresult.status==200){
      toast.success("contact deleted")
      setdata(data.filter((item) => (item.id) !== id));



    }
   
  }
  
 
  const[data,setdata]=useState([])
  useEffect(()=>{getdata()
    
  },[])
  const getdata=async ()=>{
    const result= await getcontactsapi()
    console.log(result)
    if (result.status==200){
      setdata(result.data)
    }
  }

  
  return (
   <>
   <div className='d-flex mt-5 ms-5 justify-content-center'>
    <h2 className='text-info me-3'>My contacts</h2>
  <Link to={'/add'} className='mt-2'><button className='btn btn-success'>Add new contacts</button></Link>  
     
   </div>
    <div className='container p-1 border border-dark border-2 shadow mt-5 w-75'>
      {
        data.length>0?
        <div className='row p-2 justify-content-around'>
          {
          data.map(item=>(
        

      
        
      
    <Card style={{ width: '18rem' }} className='mb-2 p-0'>
      <Card.Img variant="top" src={item.imageurl} style={{height:"200px"}} />
      <Card.Body>
        <Row>
          
         <Col>
         <CardTitle> 
         <i className="fa-solid fa-user fa-xl me-2"  />
          {item.fullname}
         </CardTitle>
         </Col>
         {/* <Col className='ms-5'>
         <Button variant='primary'><i className="fa-solid fa-trash fa-xl"  style={{color: "#f51436",}} /></Button>
         </Col>
       
      
         <Col>
            <Link to={'/edit'}><Button><i className="fa-solid fa-pen-to-square fa-xl"  style={{color: "#FFD43B",}} /></Button></Link>
       
            </Col> */}

        
          
          
          
          
         
          </Row>
          <Row>
            <Col>
            <CardText>
            <i className="fa-solid fa-phone fa-xl d-inline mt-3 me-2"  />{' '}
              {item.phonenumber}
            </CardText>
            </Col>
           
            
          </Row>
          <Row className='mt-2'>
            <Col sm={6}>
            <Link to={`/view/${item.id}`}><Button variant='primary'>View more</Button></Link>
            </Col>
            <Col sm={3}><Button variant='primary'onClick={() => handledelete((item.id))}>
            <i className="fa-solid fa-trash fa-xl"  style={{color: "#f51436",}} /></Button></Col>
            <Col sm={3}> <Link to={`/edit/${item.id}`}><Button><i className="fa-solid fa-pen-to-square fa-xl"  style={{color: "#FFD43B",}} /></Button></Link></Col>
          </Row>
       
      </Card.Body>
    </Card>))
}
    </div>

  
    :
    <h4 className='text-danger text-center'>No contacts available</h4>
}
      
</div>
   </>
  )
}

export default List