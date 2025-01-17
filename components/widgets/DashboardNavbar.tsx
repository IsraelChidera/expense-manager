"use client";

import React from 'react';
import { SidebarTrigger } from "@/components/ui/sidebar";
import Container from "@/components/elements/Container";
import Button from "@/components/elements/Button";
import { ChevronDown, FileClockIcon, NotebookPenIcon, User2Icon } from 'lucide-react';

const DashboardNavbar = () => {
    return (
        <nav className='w-full'>
            <Container>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-1 items-center space-x-2'>
                        <SidebarTrigger className="text-2xl" />

                        <p className="text-text text-[30px] font-bold ">
                            Overview
                        </p>
                    </div>

                    <div className='flex flex-1 items-center space-x-2'>
                        <Button classType='primary' className='w-full text-sm'>
                            + Add Expense
                        </Button>

                        <div className='cursor-pointer bg-primary flex justify-center items-center rounded-full p-2 w-fit'>
                            <NotebookPenIcon className='text-white w-4 h-4' />
                        </div>

                        <div className='cursor-pointer bg-primary flex justify-center items-center rounded-full p-2 w-fit'>
                            <FileClockIcon className='text-white w-4 h-4' />
                        </div>

                        <div className='flex items-center space-x-2 w-full'>
                            <div className='bg-[#FFC248] flex justify-center items-center rounded-full p-2 w-fit'>
                                <User2Icon className='text-2xl text-white' />
                            </div>

                            <p className='text-[#54657E] text-sm'>Israel Chidera</p>
                            <ChevronDown className='cursor-pointer' />
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default DashboardNavbar