import AiFeature from '@/src/components/feature/AiFeature'
import CaseStudy from '@/src/components/feature/CaseStudy'
import Cta from '@/src/components/feature/Cta'
import FeatureCards from '@/src/components/feature/FeatureCards'
import React from 'react'

export default function page() {
  return (
    <div>
        <AiFeature/>
        <FeatureCards/>
        <CaseStudy/>
        <Cta/>

    </div>
  )
}
