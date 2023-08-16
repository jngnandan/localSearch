import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Tab from './Tab'

function Home(props) {

  const {data} = props

  return (
    <div className='grid grid-cols gap-3 mx-4'>
      
      {data.map(eachitem => {
        return <Tab data={eachitem} key={eachitem.id}/>
      })}

      

    
    </div>
  )
}

export default Home