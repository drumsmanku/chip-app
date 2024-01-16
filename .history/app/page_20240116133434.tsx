import Image from 'next/image'
import HomePage from '@/pages/HomePage'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomePage/>
    </div>
  )
}
