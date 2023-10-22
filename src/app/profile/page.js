"use client"
import { useSession, signOut } from "next-auth/react"
import { UserImage } from '../../components/profile-img'
import LoginBtn from "../../components/login-btn"
import { buttonVariants } from "../../components/ui/button";

function Profile() {
    const { data: session } = useSession()
    if (session) {
        return (
            <main className="flex min-h-screen flex-col items-center dark:bg-black dark:text-white">
                <span className="text-6xl font-bold p-20 underline">
                    Bienvenido {session.user.name}
                    <UserImage img={session.user.image} w={50} h={50} />
                </span>

                <button
                    onClick={() => signOut()}
                    className={`${buttonVariants({
                        variant: "secondary",
                        size: "lg",
                        navButtons: "nav",
                    })} px-3 py-2 rounded `}
                >
                    Sign out
                </button>

            </main>
        )
    } else {
        return (
            <div className='flex items-center justify-center pt-10'>
                <LoginBtn provider="google">Sign in with Google
                </LoginBtn>
            </div>
        )
    }

}
export default Profile
