import Image from "next/image";

export default function Selfie() {
    return(
        <Image  
        alt="selfie"
        id="selfie"
            src="/rosto.png"
            width={50}
            height={5}
            priority
            className="sm:w-{150}"
            
            />
    )
};
