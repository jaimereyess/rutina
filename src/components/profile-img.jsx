import Image from "next/image";

export const UserImage = ({ img, w, h }) => <Image src={img} width={w} height={h} />