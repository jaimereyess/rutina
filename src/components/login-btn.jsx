import { signIn } from "next-auth/react"
import { buttonVariants } from "./ui/button";


export default function LoginBtn({ provider, bg, bgHover, children }) {
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
