import React from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../components/ui/card"

interface SemanalProps {
    exercise: string
    sets: number
    color: string,
}

export function Semanal({ exercise, sets, color }: SemanalProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className={`text-2xl font-bold ${color}`}>
                    {exercise}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <section className="pt-4">
                    <p>Series semanales: {sets}</p>
                </section>
            </CardContent>
        </Card>
    )
}
