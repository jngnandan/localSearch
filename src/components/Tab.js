import React from 'react'

function Tab(props) {
    const {data, deleteItem, key} = props
    const {id, title, timeAccessed, logoUrl, domainUrl} = data
   
    const deleteTab = () => {
      deleteItem(id)
    }

  return (
    <div key={key} className='bg-gray-200 p-2 rounded grid grid-cols-8 gap-4 items-center px-6'>
        <p className='text-sm col-span-2'>{timeAccessed}</p>
        
        <div className='flex flex-row justify-start items-center col-span-5'>
        <img className='w-8 h-8 mr-2' src={logoUrl}/>
        <a href={domainUrl} className='text-gray-500 text-sm font-semibold truncate'>{title}</a>
        </div>

        <div>
          <img onClick={deleteTab} className='w-6 h-6 cols-span-1' src='https://assets.ccbp.in/frontend/react-js/delete-img.png '/>
        </div>

        <div>

        </div>

    </div>
  )
}

export default Tab