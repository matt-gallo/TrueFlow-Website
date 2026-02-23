'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function BookStrategyCallRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/opt-in')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-xl text-white">Redirecting...</div>
    </div>
  )
}
