// Package Imports
import { useState, FormEvent, useEffect } from 'react'

// Interface Imports
import { IClient } from '@/interfaces/Client'

// Lib Imports
import { axiosInstance } from '@/libs/axios'

const useClient = () => {
    const [client, setClient] = useState("")
    const [clientData, setClientData] = useState<IClient | null>()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        setLoading(true)
        event.preventDefault();
        try {
            const resp = await axiosInstance.get<IClient>(`/client/${client}`)
            setClientData(resp.data)
            setError("");
        } catch (error: any) {
            const message = error.response?.data?.error || "An unknown error occurred";
            setClientData(null);
            setError(message);
        }
        setLoading(false);
    }

    return {
        client,
        setClient,
        handleSubmit,
        clientData,
        loading,
        error,
    }
}


export default useClient
