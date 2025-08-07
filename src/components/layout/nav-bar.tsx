'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItem = [
  { name: "Home", icon: "home", href: "/home" },
  { name: "Itinerary", icon: "explore", href: "/itinerary" },
  { name: "Plan", icon: "bid_landscape", href: "/plan" }
]

const NavBar = () => {
  const pathname = usePathname()

  return (
    <div className="w-full h-20 bg-monotone rounded-t-2xl p-2">
      <div className="flex justify-between px-10">
        {NavItem.map((item, index) => {
          const isActive = pathname === item.href // or use startsWith for nested routes
          return (
            <Link
              key={index}
              href={item.href}
              className={`
                flex flex-col items-center w-20 rounded-xl py-2
                ${isActive ? "text-text-active" : "text-text-inactive"}
              `}
            >
              <span className="material-symbols-outlined">
                {item.icon}
              </span>
              <p className="font-poppins">
                {item.name}
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export { NavBar }
