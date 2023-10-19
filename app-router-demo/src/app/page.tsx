import Image from 'next/image'

import { Metadata } from 'next'
import Link from 'next/link'
 
export const metadata: Metadata = {
  title: 'Next.js',
}

export default function Home() {
  let ss: string[] = []
  ss.push('2', '5')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/dashboard">Dashboard</Link>
      <div>app page</div>
    </main>
  )
}
