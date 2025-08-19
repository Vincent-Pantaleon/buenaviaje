interface InputProps {
    type: string
    name: string
    icon?: string
    placeholder?: string
    className?: string
}

const Input = ({
    type,
    name,
    icon,
    placeholder,
    className
}: InputProps) => {
    return (
        <div className={`border border-text-inactive h-12 rounded-3xl w-full flex items-center p-2 text-black bg-white ${className}`}>
            {icon && (<span className="material-symbols-outlined">{icon}</span>)}
            <input type={type} id={name} name={name} placeholder={placeholder} className="w-full ml-2 outline-none font-poppins ring-0 focus:outline-none focus:ring-0" autoComplete="off"/>
        </div>
        
    )
}

export { Input }