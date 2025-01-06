
import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from '@/components/widgets/AppSidebar';

const page = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider
            className='w-[20rem]'
        >
            <main className='relative flex  w-full '>
                <div className="bg-[#fffbf3] py-3">
                    <AppSidebar />
                </div>


                <main className=" h-screen w-full py-3">
                    <SidebarTrigger />

                    <section className="p-4 text-2xl text-grey-600 w-full">
                        section content

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