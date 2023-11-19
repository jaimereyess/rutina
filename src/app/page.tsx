"use client"
import DayPanel from '../components/days-panel'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">

      <Image
        src="/logo-white.png"
        alt="rutina Logo"
        className="dark:hidden select-none"
        draggable="false"
        width={600}
        height={100}
        priority
      />
      <Image
        src="/logo-dark.png"
        alt="rutina Logo"
        className="hidden dark:flex select-none"
        draggable="false"
        width={600}
        height={100}
        priority
      />


      <div className="grid gap-5 text-center w-full lg:w-full lg:mb-0 lg:grid-cols-5 lg:text-left border-l-0 border-r-0 dark:text-white px-20">
        <DayPanel day="Lunes" exercises={["Pecho", "Triceps", "Deltoides"]} />
        <DayPanel day="Martes" exercises={["Espalda", "Biceps", "Gemelos"]} />
        <DayPanel day="Miércoles" exercises={["Cuádriceps", "Isquios", "Gluteos", "Gemelos"]} />
        <DayPanel day="Jueves" exercises={["Pecho", "Espalda", "Biceps", "Triceps"]} />
        <DayPanel day="Viernes" exercises={["Isquios", "Cuádriceps", "Gluteos", "Deltoides"]} />

      </div>
    </main>


  )
}