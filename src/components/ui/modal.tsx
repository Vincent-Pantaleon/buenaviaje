import { DataProps } from "../home-slideshow"
import { Button } from "../button"

interface ModalProps {
    onClose: () => void
    data: DataProps
    children: React.ReactNode
    className: string
}

const Modal = ({
    onClose,
    data,
    children,
    className
}: ModalProps) => {
    return (
        <div 
            className={`fixed inset-0 z-50 flex flex-col bg-white ${className}`}
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${data.image})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Your existing content stays the same */}
            <div className="p-4">
                <Button
                    icon="close"
                    onClick={onClose}
                    className="p-2"
                />
            </div>
            
            <div className="flex-1" />
            
            <div>
                {children}
            </div>
        </div>
    )
}

export { Modal }