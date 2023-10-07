import { useSession, signIn } from "next-auth/react"
import { buttonVariants } from "./ui/button";
import { UserImage } from '../components/profile-img'


export default function LoginBtn() {
    const { data: session } = useSession()
    if (session) {
        return (
            <section className="px-6">
                <UserImage img={session.user.image} w={50} h={50} >
                </UserImage>
            </section>
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
