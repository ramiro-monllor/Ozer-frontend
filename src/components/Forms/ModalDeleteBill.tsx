// Package Imports
import React from "react";
import toast from 'react-hot-toast';

// UI imports
import { Modal, ModalContent, ModalHeader, ModalFooter, useDisclosure } from "@nextui-org/react";

// Lib Imports
import { axiosInstance } from "@/libs/axios";

// Icon Imports
import { MdOutlineDelete } from "react-icons/md";

export const ModalDeleteBill = ({ billId }: { billId: number }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleDelete = async (billId: number) => {
        try {
            const resp = await axiosInstance.delete(`/bill/${billId}`);
            toast.success('Se ha eliminado la factura');
            onOpenChange();
        } catch (error) {
            console.error('Error creating bill', error);
            toast.error('Error al crear la factura');
        }
    }

    return (
        <>
            <MdOutlineDelete onClick={onOpen} className='text-lg text-red-500 cursor-pointer' />
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="max-w-3xl my-36">
                <ModalContent className="bg-white border border-brand-lightBlue rounded-lg">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-3xl mt-6">¿Deseas eliminar la factura?</ModalHeader>
                            <ModalFooter>
                                <button className="bg-gray-500 text-white rounded-lg px-5 py-2 m-1 hover:opacity-80" onClick={onClose}>
                                    Cerrar
                                </button>
                                <button className="bg-blue-500 text-white rounded-lg px-5 py-2 m-1 hover:opacity-80" onClick={() => handleDelete(billId)}>
                                    Eliminar
                                </button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
