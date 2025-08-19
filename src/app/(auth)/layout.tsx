'use client'

import { Input } from "@/components/input"
import { Button } from "@/components/button"
import Image from "next/image"

type AuthLayoutProps = {
  children: React.ReactNode
}

export const logoLink =
  "https://mfisnqkforpihqhcwkkw.supabase.co/storage/v1/object/public/logo/C__5_-removebg-preview%201.png"

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="font-poppins flex flex-col h-screen">
      {/* Logo Section */}
      <div className="flex flex-col justify-center items-center flex-[1] bg-green-400">
        <Image alt="Logo" src={logoLink} width={300} height={154} priority />
      </div>

      {/* Children Section */}
      <div className="flex flex-col justify-end bg-blue-500 overflow-hidden">
        {children} 
      </div>
    </div>
  )
}

export default AuthLayout
