import Image from "next/image";

export default function Selfie() {
    return(
        <Image  
        alt="selfie"
        id="selfie"
            src="/rosto.png"
            width={150}
            height={50}
            priority
            className="pr-3"
            
            />
    )
};
