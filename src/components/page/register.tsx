'use client'

import { useState } from "react"
import Link from "next/link"

import { Button } from "../button"
import { Input } from "../input"


// TODO: Add Register function
const Register = () => {
    const [isPasswordVisible,  setIsPasswordVisible] = useState<boolean>(false)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false)
    const [isLogging, setIsLogging] = useState<boolean>(false)

    return (
        <>
            <h1 className="font-baloo text-3xl text font-bold text-center text-white mt-4">Hello!</h1>
            <form className="p-4 flex flex-col gap-y-4">
                <Input name="username" type="text" icon="person" placeholder="Username"/>
                <Input name="email" type="email" icon="email" placeholder="Email"/>
                <div className="bg-white rounded-3xl flex flex-row">
                    <Input
                        name="password"
                        type={isPasswordVisible ? "text" : "password"}   // 👈 toggle input type
                        icon="key"
                        placeholder="Password"
                        className="border-0"
                    />
                    <Button
                        icon={isPasswordVisible ? "visibility_off" : "visibility"}  // 👈 change icon too if you like
                        type="button"
                        onClick={() => setIsPasswordVisible(prev => !prev)}   // 👈 correct toggle
                    />
                </div>
                <div className="bg-white rounded-3xl flex flex-row">
                    <Input
                        name="confirm_password"
                        type={isConfirmPasswordVisible ? "text" : "password"}   // 👈 toggle input type
                        icon="key"
                        placeholder="Confirm Password"
                        className="border-0"
                    />
                    <Button
                        icon={isConfirmPasswordVisible ? "visibility_off" : "visibility"}  // 👈 change icon too if you like
                        type="button"
                        onClick={() => setIsConfirmPasswordVisible(prev => !prev)}   // 👈 correct toggle
                    />
                </div>

                <Button 
                    type="submit" 
                    className="py-2 rounded-2xl bg-[#F8B91A]" 
                    isDisabled={isLogging}
                >
                    {isLogging ? "Registering..." : "Register"}
                </Button>

                <p className="text-center">Already have an account? <Link href="/login" className="underline underline-offset-2">Login</Link></p>
            </form>
        </>
        
    )
}

export { Register }