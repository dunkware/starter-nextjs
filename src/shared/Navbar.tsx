"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { div } from "framer-motion/client"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "features", label: "Features" },
    { href: "#explore", label: "Explore" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
  <div className=" bg-[#0F172A] border-b-2 border-gray-800">
      <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container text-white py-4 px-4 md:px-12 flex items-center justify-between sticky top-0 z-50 "
    >
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.05 }} className="text-orange-500 text-2xl md:text-3xl font-bold">
        DUNKWARE
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <nav className="flex gap-8">
          {navItems.map((item) => (
            <motion.div key={item.href} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link href={item.href} className="hover:text-gray-200 transition-colors">
                {item.label}
              </Link>
            </motion.div>
          ))}
          
      {/* Early Access Button - Desktop */}
      <div className="hidden md:block">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="#early-access">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
              Early Access
            </Button>
          </Link>
        </motion.div>
      </div>
        </nav>
      </div>


      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-blue-900 text-white border-none w-[80%] sm:w-[350px]">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-8 mt-2">
                <span className="text-orange-500 text-2xl font-bold">DUNKWARE</span>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6 text-white" />
                </Button>
              </div>

              <nav className="flex flex-col gap-6 mb-auto">
                <AnimatePresence>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -30, opacity: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className="text-xl hover:text-orange-500 transition-colors block py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>

                  ))}

                   <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-8 mb-4"
              >
                <Link href="#early-access" onClick={() => setIsOpen(false)}>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-6 rounded-md transition-colors">
                    Early Access
                  </Button>
                </Link>
              </motion.div>
                </AnimatePresence>
              </nav>

             
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.div>
  </div>
  )
}
