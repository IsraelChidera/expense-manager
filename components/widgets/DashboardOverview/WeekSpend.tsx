"use client"

import { CarFrontIcon, HomeIcon, MonitorSmartphoneIcon, PlusIcon, ShoppingBagIcon, ShoppingCart, Tv2Icon } from 'lucide-react'
import React from 'react';
import Container from "@/components/elements/Container";
import Fab from '@mui/material/Fab';
import { BarChart } from '@mui/x-charts/BarChart';

type QuickActionsType = {
    id: number,
    name: string,
    icon: React.ReactNode,
    colorCode: string
}

const quickActions: QuickActionsType[] = [
    {
        id: 1,
        name: "House Rent",
        icon: <HomeIcon className='text-white w-6 h-6' />,
        colorCode: "#452F02"
    },
    {
        id: 2,
        name: "Car Maintenance",
        icon: <CarFrontIcon className='text-white w-6 h-6' />,
        colorCode: "#fd4438"
    },
    {
        id: 3,
        name: "Tv Subscription",
        icon: <Tv2Icon className='text-white w-6 h-6' />,
        colorCode: "#4897ea"
    },
    {
        id: 4,
        name: "Grocery Shopping",
        icon: <ShoppingBagIcon className='text-white w-6 h-6' />,
        colorCode: "#2ecc71"
    },
    {
        id: 5,
        name: "Shopping",
        icon: <ShoppingCart className='text-white w-6 h-6' />,
        colorCode: "#452F02"
    },
    {
        id: 6,
        name: "Data Subscription",
        icon: <MonitorSmartphoneIcon className='text-white w-6 h-6' />,
        colorCode: "#ffffff"
    },
    {
        id: 5,
        name: "Shopping",
        icon: <ShoppingCart className='text-white w-6 h-6' />,
        colorCode: "#452F02"
    },
    {
        id: 6,
        name: "Data Subscription",
        icon: <MonitorSmartphoneIcon className='text-white w-6 h-6' />,
        colorCode: "#ffffff"
    }
]

console.log(quickActions);

const WeekSpend = () => {
    return (
        <section>
            <Container>
                <div className='grid grid-cols-5 gap-10'>
                    <div className='col-span-2 '>
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <p className='text-[23px] font-medium text-text'>
                                    This Week Spend
                                </p>

                                <div className='mt-4 flex flex-wrap w-[178px] space-x-2'>
                                    <div className='cursor-pointer bg-[#452F02] flex justify-center items-center rounded-full p-2 w-fit'>
                                        <CarFrontIcon className='text-white w-4 h-4' />
                                    </div>

                                    <div className='cursor-pointer bg-[#fd4438] flex justify-center items-center rounded-full p-2 w-fit'>
                                        <HomeIcon className='text-white w-4 h-4' />
                                    </div>

                                    <div className='cursor-pointer bg-[#4897ea] flex justify-center items-center rounded-full p-2 w-fit'>
                                        <Tv2Icon className='text-white w-4 h-4' />
                                    </div>
                                </div>
                            </div>

                            <div className='text-center flex items-center justify-center rounded-[16px] border border-[#D3CBFB] text-text p-6 h-fit w-fit'>
                                <div>
                                    <p className='font-medium text-[36px] mb-2'>
                                        $540
                                    </p>
                                    <p className='text-xs'>Total Spend</p>
                                </div>
                            </div>
                        </div>

                        <BarChart
                            colors={["#5041BC"]}
                            xAxis={[
                                {
                                    id: 'barCategories',
                                    data: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
                                    scaleType: 'band',
                                },
                            ]}
                            series={[
                                {
                                    data: [2, 5, 3, 8, 10, 12, 10],
                                },
                            ]}
                            // width={500}
                            height={300}
                        />
                    </div>

                    <div className='col-span-3'>
                        <div className='border border-[#D7D7D7] rounded-[16px] p-4'>
                            <div className='flex items-center justify-between'>
                                <p className='text-lg font-medium text-text'>Quick Actions</p>

                                <Fab color="primary" size="small" aria-label="add">
                                    <PlusIcon />
                                </Fab>
                            </div>

                            <div className='mt-[27px] pt-6 border-t border-t-[#D7D7D7] grid grid-cols-3 gap-6 h-[318px] overflow-y-auto'>
                                {
                                    quickActions.map((Action: QuickActionsType) => (
                                        <div key={Action.id} className='cursor-pointer bg-[#F4F4F4] rounded-[24px] flex justify-center items-center py-3 px-10'>
                                            <div>
                                                <div className='flex justify-center'>
                                                    <div className={`bg-[${Action.colorCode}] flex justify-center items-center rounded-full p-4 w-fit`}>
                                                        {Action.icon}
                                                    </div>
                                                </div>
                                                <p className='text-center text-text mt-4'>{Action.name}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default WeekSpend