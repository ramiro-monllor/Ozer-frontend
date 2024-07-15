// Package Imports
import React from 'react'

// Interface Imports
import { IClient } from '@/interfaces/Client'

const Client = ({ client }: { client: IClient }) => {
    return (
        <div className='flex flex-col items-center gap-y-2 mt-2 mx-auto'>
            <p className='text-gray-400'>Id: <span className='text-gray-600'>{client.id}</span></p>
            <p className='text-gray-400'>Nombre: <span className='text-gray-600'>{client.name}</span></p>
            <p className='text-gray-400'>Domicilio: <span className='text-gray-600'>{client.domicile}</span></p>
        </div>
    )
}

export default Client