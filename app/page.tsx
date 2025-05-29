'use client'
// import { Button } from '@/components/ui/button'
import React from 'react'
import CompanionCard from './companions/CompanionCard'
import CompanionList from './companions/CompanionList'
import CTA from './companions/CTA'

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
          color="#30B39B"
          test="test"
        />
        <CompanionCard
          id="101"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="mathematics"
          duration={30}
          color="#942127"
        />
        <CompanionCard 
          id="786"
          name="Verba the Vocabulary Builder"
          topic="English Literature "
          subject="English"
          duration={40}
          color="#292919"
        />
      </section>

    <section className='home-section'>
    <CompanionList/>
    <CTA />
    </section>

    </main>
  )
}

export default Page