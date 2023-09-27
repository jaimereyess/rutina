import Link from 'next/link'
import DayPanel from '../components/days-panel'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">

      <Image
        src="/logo.png"
        alt="rutina Logo"
        className="dark:invert"
        width={500}
        height={500}
        priority
      />


      <div className="grid text-center w-full lg:w-full lg:mb-0 lg:grid-cols-5 lg:text-left text-white border-l-0 border-r-0">
        <DayPanel day="Lunes" exercises={["Pecho", "Triceps", "Deltoides"]} />
        <DayPanel day="Martes" exercises={["Espalda", "Biceps", "Gemelos"]} />
        <DayPanel day="Miércoles" exercises={["Cuádriceps", "Isquios", "Gluteos", "Gemelos"]} />
        <DayPanel day="Jueves" exercises={["Pecho", "Espalda", "Biceps", "Triceps"]} />
        <DayPanel day="Viernes" exercises={["Isquios", "Cuádriceps", "Gluteos", "Deltoides"]} />

      </div>
    </main>
  )
}
