import React from 'react'
import { Link } from 'react-router-dom'



function Landing() {
  return (
   <>
   
  
  <div className='d-flex justify-content-center align-items-center'style={{height:"90vh"}}>
    <div className='w-75% border shadow p-3 mt-4'>
        <img src="https://monsterink.com.my/wp-content/uploads/2022/04/contact-us2.gif" className='img-fluid' alt="" />
        <div className='d-grid'>
            <Link to={'/list'}className='btn btn-success'>save connections</Link>

        </div>

    </div>
  </div>
   </>
   
  )
}

export default Landing