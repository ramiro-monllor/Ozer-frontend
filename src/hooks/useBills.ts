// Package Imports
import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { useDisclosure } from "@nextui-org/react";

// Lib Imports
import { axiosInstance } from "@/libs/axios";

interface Billdata {
    amount: number;
    date: string;
    id: number;
}

const useBills = (client_id: number, edit?: boolean, billData?: Billdata) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [bill, setBill] = useState({
        client_id: client_id,
        date: edit ? billData?.date : '',
        amount: edit ? billData?.amount : '',
    })

    useEffect(() => {
        setBill(prev => ({
            ...prev,
            client_id: client_id
        }));
    }, [client_id]);

    const resetForm = () => {
        setBill({
            client_id: client_id,
            date: '',
            amount: '',
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBill({
            ...bill,
            [name]: value
        });
    }

    const handleSubmit = async () => {
        try {
            let resp;
            if (edit) {
                resp = await axiosInstance.put(`/bill/${billData?.id}`, bill);
            } else {
                resp = await axiosInstance.post(`/bill/`, bill);
            }
            resetForm();
            toast.success(edit ? 'Se ha modificado la factura' : 'Se ha creado la factura');
            onOpenChange();
        } catch (error) {
            console.error('Error creating bill', error);
            toast.error('Error al crear la factura');
        }
    }

    return {
        bill,
        isOpen,
        onOpen,
        onOpenChange,
        handleChange,
        handleSubmit,
    }
}


export default useBills
