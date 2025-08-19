import { logoLink } from "../page"

type AuthLayoutProps = {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default AuthLayout