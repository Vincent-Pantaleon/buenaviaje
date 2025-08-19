'use client'

import React, { useState } from "react"  // ✅ import React
import { Input } from "@/components/input"
import { Button } from "../button"
import { SignIn } from "@/handlers/auth/login"
import { useRouter } from "next/navigation"

const Login = () => {
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)
    const [isLogging, setIsLogging] = useState<boolean>(false)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    
    const HandleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setIsLogging(true)

        const formData = new FormData(e.currentTarget)
        const result = await SignIn(formData) // ✅ pass data to your handler

        if (result === false) {
            setIsLogging(false)
            setError('Error logging in User')
        }

        router.push('/home')
    }

    return (
        <form className="flex flex-col gap-y-4 h-full" onSubmit={HandleLogin}>
            <div className="bg-white rounded-2xl">
                <Input name="email" type="email" icon="person" placeholder="Email" className="border-0"/>
            </div>
            <div className="bg-white rounded-2xl flex flex-row">
                <Input
                    name="password"
                    type={isVisible ? "text" : "password"}   // 👈 toggle input type
                    icon="key"
                    placeholder="Password"
                    className="border-0"
                />
                <Button
                    icon={isVisible ? "visibility_off" : "visibility"}  // 👈 change icon too if you like
                    type="button"
                    onClick={() => setIsVisible(prev => !prev)}   // 👈 correct toggle
                />
            </div>

            {error && (<p className="text-red-600 text-center">{error}</p>)}

            <Button 
                type="submit" 
                className="bg-text-active py-2 rounded-2xl" 
                icon="login"
                isDisabled={isLogging}
            >
                {isLogging ? "Logging in..." : "Login"}
            </Button>
        </form>
    )
}

export { Login }
