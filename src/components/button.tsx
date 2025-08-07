interface ButtonProps {
    className?: string
    icon?: string
    children?: React.ReactNode
    onClick?: () => void
    type?: "button" | "reset" | "submit"
}

const Button = ({
    className,
    icon,
    children,
    onClick,
    type
}: ButtonProps) => {
    return (
        <button 
            className={`${className}`}
            type={type}
            onClick={onClick}
        >
            {icon && (
                <span className="material-symbols-outlined">{icon}</span>
            )}
            {children}
        </button>
    )
}

export { Button }