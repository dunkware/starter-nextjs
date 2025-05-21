"use client"

import { Brain, Users } from "lucide-react"
import DropdownMenu from "./DropdownMenu"

export default function FeaturesDropdown() {
  const featureItems = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: "AI Captures",
      description: "Let AI Capture things and Generate new things",
      href: "/features/ai-captures"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Team Jams",
      description: "Rapid fire knowledge collection",
      href: "/features/team-jams"
    }
  ]

  return <DropdownMenu label="Features" items={featureItems} />
}
