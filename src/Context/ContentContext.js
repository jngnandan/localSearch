import { createContext, useState } from "react"


const ContentContext = createContext()

const ContentProvider = ({children}) => {
    // const [name, setName] = useState('Ramu')
    const [searchQuery,setSearchQuery] = useState('')
    const [updateResults, setUpdateResults] = useState()

    return(
        <ContentContext.Provider value={{searchQuery,setSearchQuery, updateResults, setUpdateResults}}>
            {children}
        </ContentContext.Provider>
    )
}

export {ContentContext, ContentProvider}