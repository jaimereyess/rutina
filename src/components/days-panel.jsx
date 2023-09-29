import Link from "next/link"

export const dayTranslation = {
    Lunes: "monday",
    Martes: "tuesday",
    Miércoles: "wednesday",
    Jueves: "thursday",
    Viernes: "friday",
    Perfil: "profile"
}

function DayPanel({ day, exercises }) {
    return (
        <Link
            href={`/${dayTranslation[day]}`}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover dark:hover:bg-gray-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"        >
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
