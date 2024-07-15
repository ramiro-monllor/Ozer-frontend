'use client'

// Package Imports
import React from 'react'

// Component Imports
import Client from './Client'
import TableBill from './TableBill'

// UI imports
import { Spinner } from "@nextui-org/spinner";

// Custom Hook Imports
import useClient from '@/hooks/useClient'

const Hero = () => {
    const { client, setClient, handleSubmit, clientData, loading, error } = useClient()

    return (
        <div>
            <p className='text-black text-4xl lg:text-5xl font-poppins font-bold text-center p-5 mt-6 mb-4'>
                Mira las <span className='text-brand-darkBlue'>facturas</span> de tus clientes!
            </p>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="number"
                        value={client}
                        onChange={(e) => setClient(e.target.value)}
                        placeholder="Buscar cliente por ID..."
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                    >
                        Buscar
                    </button>
                </div>
            </form>
            {loading ?
                <div className="mx-auto flex justify-center gap-10 px-5 max-w-5xl md:max-w-4xl mt-2">
                    <Spinner />
                </div>
                : null}
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            {
                !loading && clientData &&
                <>
                    <Client
                        client={clientData}
                    />
                    <TableBill
                        bills={clientData.bill!}
                        client={clientData}
                    />
                </>
            }
        </div >
    )
}

export default Hero