import React from 'react';
import Container from "@/components/elements/Container";
import { CircleDollarSign, Wallet } from 'lucide-react';
import Link from 'next/link';

const ExpenseOverview = () => {
    return (
        <section className='py-20'>
            <>
                <div className='grid grid-cols-4 gap-6'>
                    <div className='border border-[#D3CBFB] rounded-[20px] p-[25px] '>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-sm text-[#797D8C] '>Last Salary earned</p>
                                <p className='text-text font-bold text-[32px] mt-1'>#250000</p>
                            </div>

                            <Wallet className='w-6 h-6 text-green-700' />
                        </div>
                    </div>

                    <div className='border border-[#D3CBFB] rounded-[20px] p-[25px] '>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-sm text-[#797D8C] '>Total Expenses</p>
                                <p className='text-text font-bold text-[32px] mt-1'>#1000000</p>
                            </div>

                            <CircleDollarSign className='w-6 h-6 text-red-700' />
                        </div>
                    </div>

                    <div className='border border-[#D3CBFB] rounded-[20px] p-[25px] '>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-sm text-[#797D8C] '>Total Expenses</p>
                                <p className='text-text font-bold text-[32px] mt-1'>#1000000</p>
                            </div>

                            <CircleDollarSign className='w-6 h-6 text-red-700' />
                        </div>
                    </div>

                    <div className='border border-[#D3CBFB] rounded-[20px] p-[25px] '>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-sm text-[#797D8C] '>Total Expenses</p>
                                <p className='text-text font-bold text-[32px] mt-1'>#1000000</p>
                            </div>

                            <CircleDollarSign className='w-6 h-6 text-red-700' />
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto mt-[40px]">
                    <table className="w-full">
                        <thead className="bg-[#EEEEEE] py-4">
                            <tr className=" w-full">
                                <th className="p-4 text-left uppercase text-xs font-semibold ">
                                    S/N
                                </th>
                                <th className="p-4 text-left uppercase flex items-center gap-1 text-xs font-semibold ">
                                    <span>Name</span>
                                </th>

                                <th className="p-4 text-left uppercase text-xs font-semibold ">
                                    Email
                                </th>

                                <th className="p-4 text-left uppercase text-xs font-semibold ">
                                    Grade
                                </th>

                                <th className="p-4 text-left uppercase text-xs font-semibold ">
                                    Campus
                                </th>

                                <th className="p-4 text-left uppercase text-xs font-semibold ">
                                    Status
                                </th>

                                <th className="p-4 text-left uppercase text-xs font-semibold ">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody className="text-[#1A1A1A]">
                            <tr
                                className="border-t border-t-[#E5E7EB] py-4 w-full border-b border-b-[#D9D9D9]"
                            >
                                <td className="p-4 text-left text-sm font-normal ">
                                    1
                                </td>
                                <td className="p-4 text-left text-sm font-normal ">

                                    personal?.firstName
                                </td>

                                <td className="p-4 text-left text-sm font-normal ">
                                    contact?.email
                                </td>

                                <td className="p-4 text-left text-sm font-normal ">
                                    applicant.totalScore
                                </td>

                                <td className="p-4 text-left text-sm font-normal ">
                                    applicant.campus?.town
                                </td>

                                <td className="p-4 text-left text-xs font-normal ">
                                    <span>
                                        admissionStatus
                                    </span>
                                </td>

                                <td className="p-4 text-left text-sm font-normal ">
                                    <Link
                                        className="text-[#757577] hover:underline"
                                        // href={`/dashboard/applicants/${applicant?.personal?.firstName.toLowerCase()}&&${applicant?.personal?.lastName.toLowerCase()}`}
                                        href={`#`}
                                    >
                                        View
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        </section>
    )
}

export default ExpenseOverview