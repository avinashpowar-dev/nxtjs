'use client'
 
import { useState } from 'react'
import dynamic from 'next/dynamic'
 
// Client Components:
const ComponentA = dynamic(() => import('./one'));
const ComponentB = dynamic(() => import('./Two'));

 
export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false)
 
  return (
    <div>
      {/* Load immediately, but in a separate client bundle */}
      <ComponentA />
 
      {/* Load on demand, only when/if the condition is met */}
      {showMore && <ComponentB />}<br/><br/>
      <button onClick={() => setShowMore(!showMore)}>Toggle</button>
 
    </div>
  )
}