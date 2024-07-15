// Package Imports
import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-[#fafafa] border-gray-200 w-full py-1">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://static.wixstatic.com/media/772c04_fb9b329a7e3d421e968f5c3fc4fbc6c2~mv2.png/v1/fill/w_186,h_186,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/DALL%C2%B7E%202024-05-14%2014_13_22%20-%20Design%20a%20modern%20and%20simple%20logo%20for%20an%20app%20named%20ozer_bot_%20The%20app%20is%20a.png" className="h-16" alt="Ozer Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Ozer</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar