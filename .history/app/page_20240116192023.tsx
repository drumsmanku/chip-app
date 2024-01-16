import Image from 'next/image'
import HomePage from '@/pages/HomePage'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white text-black">
      <HomePage/>
    </main>
  )
}
