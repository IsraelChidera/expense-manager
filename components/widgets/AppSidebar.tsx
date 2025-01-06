"use client"

import * as React from "react"
import {

  Flag,
  GalleryVerticalEnd,
  LayoutDashboard,
  LogOut,

  UsersRound,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center space-x-3">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
            <GalleryVerticalEnd />
          </div>

          <span className="truncate font-semibold">
            Expense Manager
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <ul className='mt-[80px] space-y-[24px]'>
          <li>

            <Link
              className={`${pathname === '/dashboard' ? "bg-[#A57D3F1A] text-gold" : "text-[#1a1a1a] bg-transparent"} px-[12px] py-[8px] flex items-center space-x-4 rounded-[8px] `}
              href="/dashboard"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                <LayoutDashboard className="text-[24px]" />
              </div>

              <span className="truncate font-medium text-sm">
                Dashboard
              </span>
            </Link>
          </li>

          <li>
            <Link
              className={`${pathname === '/dashboard/applicants' ? "bg-[#A57D3F1A] text-gold" : "text-[#1a1a1a] bg-transparent"} px-[12px] py-[8px] flex items-center space-x-4 rounded-[8px] `}
              href="/dashboard/applicants"
            >
              <UsersRound className="text-[24px]" />
              <p className='font-medium text-sm '>
                Applicants
              </p>
            </Link>
          </li>

          <li>
            <Link
              className={`${pathname === '/dashboard/benchmark' ? "bg-[#A57D3F1A] text-gold" : "text-[#1a1a1a] bg-transparent"} px-[12px] py-[8px] flex items-center space-x-4 rounded-[8px] `}
              href="/dashboard/benchmark"
            >
              <Flag className="text-[24px]" />

              <p className='font-medium text-sm '>
                Benchmark
              </p>
            </Link>
          </li>

          <li>
            <button className='rounded-[8px] bg-white px-[12px] py-[8px] flex items-center space-x-4' >

              <LogOut className="text-[#FF0000] text-[24px]" />
              <p className='text-[#FF0000] font-medium text-sm '>
                Log out
              </p>
            </button>
          </li>
        </ul>


      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

