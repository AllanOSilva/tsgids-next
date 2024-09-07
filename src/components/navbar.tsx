"use client"
import Cano1 from "./ui/cano1"
import Logo from "./ui/logo"
export default function Navbar(){
    return(
        <>
        <nav className="bg-[#e0b700] shadow-3xl p-4 sticky top-0">
            <div className="container mx-auto flex justify-between items-center">
                <Cano1 />
                <Logo />
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">About</a>
                    <a href="#" className="text-white">Services</a>
                    <a href="#" className="text-white">Contact</a>
                </div>
            </div>
        </nav>
        </>
    )
}
