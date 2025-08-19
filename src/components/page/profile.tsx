'use client'

import { Logout } from "@/handlers/auth/logout"
import { Button } from "../button"

const Profile = () => {
    const HandleLogout = async () => {
        await Logout()
    }
    
    return (
        <div>
            <Button onClick={HandleLogout} icon="logout" className="bg-text-active rounded-2xl w-full">Logout</Button>
        </div>
    )
}

export { Profile }