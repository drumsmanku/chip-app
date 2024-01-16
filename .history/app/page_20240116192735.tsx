import Image from 'next/image'
import HomePage from '@/pages/HomePage'

export default function Home() {
  return (
    <main className="flex h-[100vh]  flex-col items-center  bg-white text-black">
      <HomePage/>
    </main>
  )
}
