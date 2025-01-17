"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

type ContainerProps = {
  children: React.ReactNode,
  className?: string
}

const index = ({ children, className }: ContainerProps) => {

  const pathname: any = usePathname();

  return (
    <div className={`${pathname.includes("dashboard") ? "none " : "mx-auto max-w-[1300px] lg:w-10/12 w-11/12"}   ${className}`}>
      {children}
    </div>
  )
}

export default index