'use client'
import { useState } from 'react'
import { MdHomeFilled } from "react-icons/md";
import { IoCalculator } from "react-icons/io5";
import SidebarMenuItem, { SidebarMenuItemsProps } from './SidebarMenuItem';

interface SidebarProps{
  username: string
}

const listMenuItems : SidebarMenuItemsProps[] = [
  { path:"/dashboard/home", 
    icon:<MdHomeFilled />, 
    description:"Inicio" 
  },
  { path:"/dashboard/calculator", 
    icon:<IoCalculator />, 
    description:"Inicio" 
  },
]

export default function Sidebar({username}:SidebarProps) {

  return (
      <div className="w-full sm:w-1/6 bg-white">
        <div className="h-1/5 flex flex-col items-center justify-center bg-gray-50">
          <img src="https://picsum.photos/200" alt="Profile" className="w-24 h-24 rounded-full mb-4"/>
          <h2 className="text-xl font-semibold">{username}</h2>
        </div>
        <div className="mb-10">
          {listMenuItems.map(item => (
            <SidebarMenuItem
              path={item.path}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
  );
}
