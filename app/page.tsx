'use client'
// import { Button } from '@/components/ui/button'
import React from 'react'
import CompanionCard from './companions/CompanionCard'
import CompanionList from './companions/CompanionList'
import CTA from './companions/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 >Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#8be7d6"
       
        />
        <CompanionCard
          id="101"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="mathematics"
          duration={30}
          color="#f59196"
        />
        <CompanionCard 
          id="786"
          name="Verba the Vocabulary Builder"
          topic="English Literature "
          subject="English"
          duration={40}
          color="#e9e98a"
        />
      </section>

    <section className='home-section'>
    <CompanionList
       title="Recently completed sessions"
       companions={recentSessions.map(session => ({
         ...session,
         duration: String(session.duration),
       }))}
       classNames="w-2/3 max-lg:w-full"
    />
    <CTA />
    </section>

    </main>
  )
}

export default Page