"use client"

import React from 'react';
// import { motion } from 'motion/react';

type ButtonProps = {
    children: React.ReactNode,
    className?: string,
    onClick?: any,
    type?: any,
    props?: any,
    disabled?: boolean,
    classType?: string,
}

const index = ({ classType, children, className, onClick, type, disabled, ...props }: ButtonProps) => {
    return (
        <button
            // whileHover={{ scale: 1.1 }}
            // whileTap={{ scale: 0.95 }}
            type={type}
            onClick={onClick}
            className={`${classType === "primary" && "border bg-primaryText rounded-[16px] text-white border-white"} 
            ${classType === "secondary" && "bg-transparent text-[#FFC248] border-gold border rounded-[16px]"} 
             text-[16px] lg:text-[18px] font-medium hover:bg-opacity-90 py-[12px] px-[24px]
            
            ${className}`
            }
            {...props}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default index