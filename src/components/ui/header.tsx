interface HeaderProps {
    header1: string
    header2: string 
}

const Header = ({
    header1,
    header2
}: HeaderProps) => {
    
    return (
        <div>
            <h2 className="font-poppins text-[#818181]">{header1}</h2>
            <h1 className="font-baloo text-2xl font-bold">{header2}</h1>
        </div>
    )
}

export { Header }