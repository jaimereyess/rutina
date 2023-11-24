"use client"
import Image from 'next/image'
import Panel from "../components/panels"

export default function Home() {
  return (
    <main className="flex  flex-col items-center">

      <Image
        src="/logo-white.png"
        alt="rutina Logo"
        className="dark:hidden select-none"
        draggable="false"
        width={600}
        height={0}
        priority
      />
      <Image
        src="/logo-dark.png"
        alt="rutina Logo"
        className="hidden dark:flex select-none"
        draggable="false"
        width={600}
        height={0}
        priority
      />

      <Panel />
    </main>


  )
}
