'use server'

import { createClient } from "@/utils/supabase/server"

const SignIn = async (formData: FormData) => {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    })

    if (error) {
        return false
    }

    return true
}

export { SignIn }