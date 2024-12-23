import AppSidebar from '@/components/widgets/AppSidebar';
import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

const page = ({children}: {children: React.ReactNode}) => {
    return (
        <SidebarProvider>
            <main className='relative flex  w-full '>
                <AppSidebar />

                <section className="bg-gray-600 h-screen w-full">
                    <SidebarTrigger />

                    <div className="text-2xl text-grey-600 w-full">
                        main content

                        <div>
                            {children}
                        </div>
                    </div>

                </section>
            </main>
        </SidebarProvider>
    )
}

export default page