
import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from '@/components/widgets/AppSidebar';
import DashboardOverview from '@/components/widgets/DashboardOverview';
import DashboardNavbar from '@/components/widgets/DashboardNavbar';
import ExpenseOverview from '@/components/widgets/DashboardOverview/ExpenseOverview';

const page = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider
            className=' py-4'
        >
            <main className='relative flex  w-full '>
                <div>
                    <AppSidebar />
                </div>


                <main className="pl-6 h-screen w-full py-3">
                    <DashboardNavbar />

                    <DashboardOverview />

                    <ExpenseOverview />

                    <section className=" text-2xl text-grey-600 w-full">

                        <div className='bg-[#f6f6f6]'>
                            {children}
                        </div>
                    </section>

                </main>
            </main>
        </SidebarProvider>
    )
}

export default page