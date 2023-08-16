import React from 'react'

function Tab(props) {
    const {data} = props
    const {id, title, timeAccessed, logoUrl, domainUrl} = data
    console.log(id)
   

  return (
    <div className='bg-gray-200 p-2 rounded flex flex-row justify-between items-center px-6'>
        <img src={logoUrl}/>
        <a href={domainUrl} className='text-gray-500 font-semibold'>{title}</a>
        <p>{timeAccessed}</p>

    </div>
  )
}

export default Tab