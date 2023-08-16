import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Tab from './Tab'
import { ContentContext } from '../Context/ContentContext'

function Home(props) {

  const {data} = props

  const {searchQuery, updateResults, setUpdateResults} = useContext(ContentContext)

  const [itemId, setItemId] = useState(null)
  const [filterdata, setFilterData] = useState(data)


  const deleteItem = (id) => {

    console.log('delete item', id)
    setItemId(id,true)
    setFilterData(filterdata.filter(eachitem => eachitem.id!== id))
  }

  const updateData = filterdata.filter(eachitem => eachitem.title.toLowerCase().includes(searchQuery.toLowerCase()))



  return (
    <div className='grid grid-cols gap-3 mx-4'>
      
      {updateData.map(eachitem => {
        return <Tab data={eachitem} key={eachitem.id} deleteItem={deleteItem}/>
      })}

    </div>
  )
}

export default Home