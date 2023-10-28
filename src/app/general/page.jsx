import React from 'react'
import { Semanal } from '../../components/semanal'
import TittleDay from '../../components/days-letters'
import { exerciseColor } from '../../components/exercise-card'

function General() {
    return (
        <main className="min-h-screen pb-2 grid dark:text-white dark:bg-black p-6">
            <div>
                <TittleDay title="Carga semanal" />
                <section className='p-4'>
                    <span className='text-2xl text-center font-bold'>Tren superior</span>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Semanal exercise="Pecho" sets={15} color={"text-red-700"} />
                        <Semanal exercise="Espalda" sets={18} color={"text-emerald-800"} />
                        <Semanal exercise="Biceps" sets={12} color={"text-amber-600"} />
                        <Semanal exercise="Triceps" sets={12} color={"text-sky-800"} />
                        <Semanal exercise="Deltoides" sets={24} color={"text-green-500"} />
                    </div>
                </section>

                <section className='p-4'>
                    <span className='text-2xl text-center font-bold'>Tren superior</span>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Semanal exercise="Cuádriceps" sets={19} color={"text-violet-600"} />
                        <Semanal exercise="Isqueos" sets={11} color={"text-cyan-700"} />
                        <Semanal exercise="Gluteos" sets={8} color={"text-purple-600"} />
                        <Semanal exercise="Gemelos" sets={12} color={"text-yellow-600"} />
                    </div>
                </section>
            </div>
        </main >
    )
}

export default General
