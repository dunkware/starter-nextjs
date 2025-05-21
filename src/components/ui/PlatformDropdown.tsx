"use client"

import { Globe } from "lucide-react"
import DropdownMenu from "./DropdownMenu"

export default function PlatformDropdown() {
  const platformItems = [
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Generative Web",
      description: "Self growing software through people and AI",
      href: "/platform/generative-web"
    }
  ]

  return <DropdownMenu label="Platform" items={platformItems} />
}
