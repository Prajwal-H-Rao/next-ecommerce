import React from 'react'
import Navbar from '../components/Navbar'

const CategoryLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default CategoryLayout