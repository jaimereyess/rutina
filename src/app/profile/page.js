"use client"
import { useSession, signOut } from "next-auth/react"
import { UserImage } from '../../components/profile-img'
import LoginBtn from "../../components/login-btn"

function Profile() {

    const { data: session } = useSession()
    if (session) {
        return (
            <main className="flex min-h-screen flex-col items-center dark:bg-black dark:text-white">
                <span className="text-6xl font-bold p-20 underline">
                    <LoginBtn />
                    Bienvenido {session.user.name}
                    <UserImage img={session.user.image} w={50} h={50} />
                </span>
                <button onClick={() => signOut()}>Sign out</button>

            </main>
        )
    }

}
export default Profile
