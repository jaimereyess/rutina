import { useSession, signIn, signOut } from "next-auth/react"
import { buttonVariants } from "./ui/button";


export default function LoginBtn() {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            <button
                onClick={() => signIn()}
                className={`${buttonVariants({
                    size: "lg",
                    navButtons: "nav",
                })} bg-sky-400 px-3 py-2 rounded hover:text-black hover:bg-white`}
            >
                Sign In
            </button>
        </>

    )
}
