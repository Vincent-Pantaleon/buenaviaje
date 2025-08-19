import { Login } from "@/components/page/login"
import Image from "next/image";
import { logoLink } from "@/app/page";


const LoginPage = () => {
    return (
        <div className="font-poppins p-5 flex flex-col h-screen bg-white">
    
            <div className="flex flex-col justify-center items-center h-[60%]">
                <Image alt="Logo" src={logoLink} width={300} height={154} autoFocus={true} priority/>
            </div>
    
            <div className="h-fit bg-[#F8B91A] rounded-lg p-3 flex flex-col gap-y-5">
                <h1 className="text-2xl font-baloo font-bold">Welcome!</h1>
                
                <p className="text-justify">Welcome to Buenaviaje where travelling is made simple.</p>
                
                <Login/>

            </div>
            
        </div>
    );
}

export default LoginPage