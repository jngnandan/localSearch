
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from'react'
import { ContentContext } from '../Context/ContentContext'

function Header() {
  const [search, setSearch] = useState('')

  const {searchQuery, setSearchQuery} = useContext(ContentContext)

  const querySearch = (event) => {
    setSearch(event.target.value)
    setSearchQuery(event.target.value)
  }
  
  console.log(searchQuery)

  

  return (
    <div className='bg-blue-500 h-16 grid grid-cols-3 gap-8 items-center mb-4'>
      <Link to='/' className='text-white text-2xl font-semiold'>Home</Link>

      <input onChange={querySearch} type='text' className='border border-1 py-2 px-4 bg-transparent rounded' placeholder='Search'/>
      <></>
    </div>
  )
}

export default Header