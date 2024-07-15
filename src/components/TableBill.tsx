// Package Imports
import React from 'react'

// Interface Imports
import { IBill } from '@/interfaces/Bill'
import { IClient } from '@/interfaces/Client'

// Component Imports
import { ModalManagementBill } from './Forms/ModalManagementBill'
import { ModalDeleteBill } from './Forms/ModalDeleteBill';

const TableBill = ({ bills, client }: { bills: IBill[], client: IClient }) => {
    const totalAmount = bills.reduce((total, bill) => total + bill.amount, 0);

    return (
        <div className="mt-4 mx-auto w-3/4">
            <div className='flex flex-row justify-between'>
                {
                    bills.length < 1 && <span className='text-center text-xl text-red-500'>No hay facturas</span>
                }
                <ModalManagementBill client_id={client.id} />
            </div>
            <table className="min-w-full divide-y divide-gray-200 mt-2">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-60">
                            Fecha
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID Cliente
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Importe
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {bills.map((bill: IBill, indexBill: number) => (
                        <tr key={indexBill} className="">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {bill.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {bill.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {bill.client_id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">
                                ${bill.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap flex flex-row gap-x-2">
                                <ModalDeleteBill billId={bill.id} />
                                <ModalManagementBill
                                    client_id={client.id}
                                    edit={true}
                                    billData={bill}
                                />
                            </td>
                        </tr>
                    ))}
                    <tr className="bg-gray-100">
                        <td colSpan={3} className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                            Total:
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">
                            ${totalAmount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableBill

