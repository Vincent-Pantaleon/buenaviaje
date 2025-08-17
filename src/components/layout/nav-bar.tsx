'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavBarItem } from "./nav-item"

const NavItem = [
  { name: "Home", icon: "home", href: "/home" },
  { name: "Plan", icon: "event_available", href: "/plan" },
  { name: "Create", icon: "add_box", href: "/create" },
  { name: "Map", icon: "map", href: "/map" },
  { name: "Profile", icon: "person", href: "/profile" }
]

const NavBar = () => {
  const pathname = usePathname()

  return (
    <div className="w-full h-20 rounded-t-4xl border-t-1 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex h-full justify-evenly items-center">
        {NavItem.map((item, index) => {
          const isActive = pathname === item.href // Use startsWith if needed

          if (item.name === "Create") {
            // Special handling for Create
            return (
              <NavBarItem 
                key={index}
                item={item}
                isActive={isActive}
                background={true}
              />
            )
          }

          // Default rendering for others
          return (
            <NavBarItem 
                key={index}
                item={item}
                isActive={isActive}
              />
          )
        })}
      </div>
    </div>
  )
}

export { NavBar }