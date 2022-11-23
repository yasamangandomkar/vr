import React from 'react'

const Button = ({ children }) => {
    return (
        <button type="button" className="bg-[#BC3CD8] p-3 rounded text-sm hover:bg-[#C54B8C] cursor-pointer">
            {children}
        </button>
    )
}

export default Button