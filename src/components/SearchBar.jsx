import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton, Paper } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  const navigate = useNavigate()

    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      if(searchTerm) {
        navigate(`/search/${searchTerm}`)
        setSearchTerm('')
      }
    }

  return (
    <Paper 
    component="form"
    onSubmit={ handleSubmit }
    sx={{ borderRadius: 20, height: '40px', border: '1px solid #e3e3e3',  boxShadow: 0, mr: { sm: 5 } }}
    >
    <input
    className='search-bar'
    placeholder="search..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value) }
    style={{ height: '95%', paddingLeft: '10px', paddingRight: '10px', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, }}
    />
    <IconButton type='submit' sx={{ borderRadius: 'none', height: '40px', width: '40px',  color: 'red', }} >
        <Search /> 
    </IconButton>
    </Paper>
  )
}

export default SearchBar