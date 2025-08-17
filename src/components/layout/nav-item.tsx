import Link from "next/link"

type ItemType = {
    name: string
    icon: string
    href: string
}

type NavItemTypes = {
    background?: boolean
    isActive?: boolean
    item: ItemType
}

const NavBarItem = ( { background, isActive = false, item }: NavItemTypes ) => {
    return (
        <Link
            href={item.href}
            className={`    
                flex flex-col items-center rounded-xl p-2 
                ${isActive ? "text-text-active" : "text-black"}
                ${background ? "bg-teal-500 text-white" : ""}
            `}
        >
            <span className="material-symbols-outlined">
                {item.icon}
            </span>
            <p className="font-poppins">{item.name}</p>
        </Link>
    )
}

export { NavBarItem }