import { signIn } from "next-auth/react"
import { buttonVariants } from "./ui/button";


export default function LoginBtn({ provider, children }) {
    return (
        <>
            <button
                onClick={() => signIn(provider)}
                className={`${buttonVariants({
                    size: "lg",
                    navButtons: "nav",
                })} bg-sky-400 px-3 py-2 rounded hover:bg-sky-500`}
            >
                {children}
            </button>
        </>

    )
}
