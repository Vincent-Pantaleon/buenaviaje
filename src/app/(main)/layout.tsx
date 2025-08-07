import { NavBar } from "@/components/layout/nav-bar"

interface LayoutProps {
    children: React.ReactNode
} 

const MainLayout = ({ children }: LayoutProps) => {
    return (
        <div className="relative h-screen flex flex-col">
            <div className="flex-1 p-4 overflow-auto">
                {children}
            </div>
            <div className="flex-shrink-0">
                <NavBar />
            </div>
        </div>
    )
}

export default MainLayout