import Image from "next/image";

export default function Cano1() {
    return(
        <Image 
            src="/topo-vazio_70_13zon.png"
            width={100}
            height={100}
            style={{padding:4,zIndex:1 }}    
            alt="cano"
            className="p-0 m-0"
            priority />
    )
};
