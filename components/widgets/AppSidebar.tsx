"use client"

import * as React from "react"
import {

  FileClock,
  Flag,
  GalleryVerticalEnd,
  HandCoins,
  LayoutDashboard,
  LayoutDashboardIcon,
  LogOut,

  UsersRound,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" {...props} className="py-4 bg-primaryText">
      <SidebarHeader>
        <div className="text-white flex items-center space-x-3">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
            <GalleryVerticalEnd className="text-3xl" />
          </div>

          <span className="text-2xl truncate font-semibold">
            Expensify
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="pt-10">
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem className="space-y-6">
              <Link href="/">
                <SidebarMenuButton className={`${pathname === "/dashboard" ? "bg-white" : "null hover:bg-[#FFC248]"} `}>
                  <LayoutDashboardIcon className={`${pathname === "/dashboard" ? "text-primaryText" : "text-white"}  text-2xl`} />

                  <span className={`${pathname === "/dashboard" ? "font-medium text-primaryText" : "text-white"} text-base`}>Dashboard</span>
                </SidebarMenuButton>
              </Link>

              <SidebarMenuButton className={`${pathname === "/" ? "bg-white " : "null hover:bg-[#FFC248]"} `}>
                <FileClock className={`${pathname === "/" ? "text-primaryText" : "text-white"}  text-2xl`} />
                <span className={`${pathname === "/a" ? "font-bold text-primaryText" : "text-white"} text-base`}>Items</span>
              </SidebarMenuButton>

              <SidebarMenuButton className={`${pathname === "/" ? "bg-white" : "null hover:bg-[#FFC248]"} `}>
                <HandCoins className={`${pathname === "/" ? "text-primaryText" : "text-white"}  text-2xl`} />
                <span className={`${pathname === "/b" ? "font-bold text-primaryText" : "text-white"} text-base`}>Items</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

      </SidebarContent>

      <SidebarFooter>

      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

