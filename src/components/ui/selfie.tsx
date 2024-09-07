import Image from "next/image";

export default function Selfie() {
    return(
        <Image  
        alt="selfie"
            src="/rosto.png"
            width={150}
            height={100}
            priority
            />
    )
};
