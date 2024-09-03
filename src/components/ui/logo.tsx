import Image from "next/image"
export default function Logo(){
    return(
        
        <Image
                    src="/logo_2_11zon.png"
                    width={150}
                    height={150}
                    style={{padding:4,zIndex:1 }}     
                    className=" hover:transition duration-500 cursor-pointer md:width={150}"
                    alt="Logotipo"
                    priority
                />
    )
}