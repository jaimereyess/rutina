import Image from "next/image";

interface UserImageProps {
    img: string
    w: number
    h: number
}

export const UserImage = ({ img, w, h }: UserImageProps) => <Image src={img} width={w} height={h}
    alt="foto de perfil" className="rounded-full" />
