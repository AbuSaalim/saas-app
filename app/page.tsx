'use client'
import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <div>
      <h1 className='text-2xl underline'>Welcome To SaaS App</h1>
      <Button
        className='mt-4 '
        onClick={() => {
          window.location.href = '/interview/1'
        }}
      >
        Start Interview
      </Button> 
    </div>
  )
}

export default Page