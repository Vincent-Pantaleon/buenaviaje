import Image from "next/image";
import Link from "next/link";
import { Login } from "@/components/page/login"


// TODO: Do this tomorrow
export const logoLink = 'https://mfisnqkforpihqhcwkkw.supabase.co/storage/v1/object/public/logo/C__5_-removebg-preview%201.png'

export default function LandingPage() {
  return (
    <div className="font-poppins p-5 flex flex-col h-screen">

      <div className="flex flex-col justify-center items-center h-[60%]">
        <Image alt="Logo" src={logoLink} width={300} height={154} autoFocus={true}/>
      </div>

      <div className="h-[40%]">
        <p>Hello World</p>
        
        <div>
          <Login/>
        </div>
      </div>
        
    </div>
  );
}
