interface ButtonProps {
    className?: string
    icon?: string
    children?: React.ReactNode
    onClick?: () => void
    type?: "button" | "reset" | "submit"
    isDisabled?: boolean
}

const Button = ({
    className,
    icon,
    children,
    onClick,
    type,
    isDisabled = false
}: ButtonProps) => {
    return (
        <button 
            className={`${className} flex justify-center items-center p-2`}
            type={type}
            onClick={onClick}
            disabled={isDisabled}
        >
            {icon && (
                <span className="material-symbols-outlined">{icon}</span>
            )}
            {children}
        </button>
    )
}

export { Button }