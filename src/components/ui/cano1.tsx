import Image from "next/image";

export default function Cano1() {
    return(
        <Image 
            src="/topo-vazio_70_13zon.png"
            width={300}
            height={100}
            style={{zIndex:1,left:0, }}    
            alt="cano"
            className="left-0 sm:max-w-fit"
            priority />
    )
};
