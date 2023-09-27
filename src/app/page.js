import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <Link className="text-white text-3xl underline" href="./monday"> Empieza la rutina </Link>
    </main>
  )
}
