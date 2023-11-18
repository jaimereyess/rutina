import { signIn } from "next-auth/react"
import { buttonVariants } from "./ui/button";

interface LoginBtnProps {
    provider: string
    bg: string
    bgHover: string
    children: any
}


export default function LoginBtn({ provider, bg, bgHover, children }: LoginBtnProps) {
    return (
        <>
            <button
                onClick={() => signIn(provider)}
                className={`${buttonVariants({
                    size: "lg",
                    navButtons: "nav",
                })} px-3 py-2 rounded ${bg} ${bgHover}`}
            >
                {children}
            </button>
        </>

    )
}
