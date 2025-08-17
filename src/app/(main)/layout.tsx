import { NavBar } from "@/components/layout/nav-bar"

interface LayoutProps {
    children: React.ReactNode
} 

const MainLayout = ({ children }: LayoutProps) => {
    return (
        <div className="relative h-screen flex flex-col">
            <div className="flex-1 p-4 overflow-auto pb-24 ">
                {children}
            </div>
            <div className="fixed bottom-0 left-0 right-0 z-50">
                <NavBar />
            </div>
        </div>
    )
}

export default MainLayout