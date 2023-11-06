import Link from "next/link"

export const dayTranslation = {
    Lunes: "monday",
    Martes: "tuesday",
    Miércoles: "wednesday",
    Jueves: "thursday",
    Viernes: "friday",
    Perfil: "profile",
    General: "general"
}

function DayPanel({ day, exercises }) {

    return (
        <Link
            href={`/${dayTranslation[day]}`}
            className="group rounded-lg px-5 py-4 transition-colors bg-slate-200 hover:bg-slate-300
            hover:border-solid hover:border-black hover:border-2
            dark:bg-gray-800 hover:dark:bg-gray-900 hover:dark:border-solid hover:dark:border-white hover:dark:border-2">
            <h1 className={`mb-3 text-3xl font-semibold`}>
                {day}{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                </span>
            </h1>
            {exercises.map((exercise, index) => (
                <p key={index}>{exercise}</p>
            ))}
        </Link>
    )
}

export default DayPanel
