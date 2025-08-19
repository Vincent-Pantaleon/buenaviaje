'use server'

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

const Logout = async () => {
    const supabase = await createClient()

    const { error } = await supabase.auth.signOut({ scope: 'global' });

    if (error) {
        return false
    }

    return redirect('/login')
}

export { Logout }