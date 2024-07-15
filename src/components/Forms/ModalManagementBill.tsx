// Package Imports
import React from "react";

// UI imports
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, } from "@nextui-org/react";

// Custom Hook Imports
import useBills from '@/hooks/useBills'

// Icon Imports
import { MdEdit } from "react-icons/md";

interface ModalBillProps {
    client_id?: number;
    edit?: boolean;
    billData?: {
        amount: number;
        date: string;
        id: number;
    };
}

export const ModalManagementBill: React.FC<ModalBillProps> = ({ client_id, edit, billData }) => {
    const { bill, isOpen, onOpen, onOpenChange, handleChange, handleSubmit } = useBills(client_id!, edit, billData)

    return (
        <>
            {
                edit ? <MdEdit onClick={onOpen} className='text-lg text-red-500 cursor-pointer' />
                    : <button onClick={onOpen} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Crear Factura</button>
            }
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="max-w-5xl my-36">
                <ModalContent className="bg-white border border-brand-lightBlue rounded-lg">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-3xl mt-6">{edit ? 'Editar' : 'Crear'} Factura</ModalHeader>
                            <hr className='mx-auto w-10/12 border-y-1 border-gray-400 my-2 mb-4'></hr>
                            <ModalBody>
                                <form className="flex flex-col gap-y-2">
                                    <input
                                        name="date"
                                        type="date"
                                        placeholder="Fecha"
                                        value={bill.date}
                                        onChange={handleChange}
                                        required
                                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                                    />
                                    <input
                                        name="amount"
                                        type="number"
                                        placeholder="Monto"
                                        value={bill.amount}
                                        onChange={handleChange}
                                        required
                                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                                    />
                                    <p className="text-gray-400">Ambos campos son requeridos</p>

                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <button className="bg-red-500 text-white rounded-lg px-5 py-2 m-1 hover:opacity-80" onClick={onClose}>
                                    Cerrar
                                </button>
                                <button className="bg-blue-500 text-white rounded-lg px-5 py-2 m-1 hover:opacity-80" onClick={handleSubmit} disabled={bill.date === '' || bill.amount === '' ? true : false}>
                                    {edit ? 'Editar' : 'Crear'}
                                </button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    );
}
