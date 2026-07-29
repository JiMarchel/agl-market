import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '#/features/home/components/hero'
import { MarketsToday } from '#/features/home/components/markets-today'
import { Services } from '#/features/home/components/services'
import { AccountTypes } from '#/features/home/components/account-types'
import { WhyUs } from '#/features/home/components/why-us'

export const Route = createFileRoute('/(home)/')({ component: Home })

function Home() {
  return (
    <>
      <Hero />
      <MarketsToday />
      <Services />
      <AccountTypes/>
      <WhyUs/>
    </>
  )
}
