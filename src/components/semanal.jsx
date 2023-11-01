import { cn } from "../lib/utils"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../components/ui/card"

export function Semanal({ exercise, sets, color, className, ...props }) {
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
