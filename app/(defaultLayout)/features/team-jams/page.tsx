import React from 'react'
import Image from 'next/image'
import TeamJamsBanner from '@/src/components/feature/team-jams/TeamJamsBanner'
import UseCases from '@/src/components/feature/team-jams/UseCases'
import TeamJamsWorks from '@/src/components/feature/team-jams/TeamJamsWorks'
import TeamColaboaration from '@/src/components/feature/team-jams/TeamColaboaration'
import Cta from '@/src/components/feature/Cta'

export default function TeamJamsPage() {
  return (
    <div className="w-full">
      <TeamJamsBanner/>
     
<TeamJamsWorks/>

       <UseCases/>
     <TeamColaboaration/>

      <Cta/>
    </div>
  )
}
