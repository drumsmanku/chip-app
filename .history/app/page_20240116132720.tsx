import Image from 'next/image'
import HomePage from '@/pages/HomePage'
import ChipInput from '@/components/ChipInput/ChipInput'
const availableSuggestions = ["Alice", "Bob", "Charlie", "Dave"];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ChipInput availableSuggestions={availableSuggestions} />
    </main>
  )
}
