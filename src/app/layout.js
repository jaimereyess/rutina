import Nav from '../components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rutina',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} >
        <div className='bg-white-img dark:bg-full-black' >
          <Nav />
          <div className="flex">
            <div className="flex-1">{children}</div>
          </div >
        </div>
      </body>
    </html >
  )
}
