'use client'

import { useState } from "react"
import { HomeSlideShow, DataProps } from "../home-slideshow"
import { Button } from "../button"
import { Input } from "../ui/input"
import { Modal } from "../ui/modal"
import { HomeModal } from "./modal-content"
import { Header } from "../ui/header"

const MockData = [
    {name: "Alicia's Ridge", image: "/alicia.jpg", price: "1,000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam unde molestias enim incidunt voluptatibus quisquam optio asperiores velit ex temporibus quo, provident, ipsum perferendis sequi dolorum eius itaque iste harum!"},
    {name: "Alicia's Ridge", image: "/alicia.jpg", price: "1,000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam unde molestias enim incidunt voluptatibus quisquam optio asperiores velit ex temporibus quo, provident, ipsum perferendis sequi dolorum eius itaque iste harum!"},
    {name: "Alicia's Ridge", image: "/alicia.jpg", price: "1,000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam unde molestias enim incidunt voluptatibus quisquam optio asperiores velit ex temporibus quo, provident, ipsum perferendis sequi dolorum eius itaque iste harum!"},
    {name: "Alicia's Ridge", image: "/alicia.jpg", price: "1,000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam unde molestias enim incidunt voluptatibus quisquam optio asperiores velit ex temporibus quo, provident, ipsum perferendis sequi dolorum eius itaque iste harum!"},
]

const Home = () => {
    const [selectedSpot, setSelectedSpot] = useState<DataProps | null>(null)
    const [isClosing, setIsClosing] = useState(false)

    const closeModal = () => {
        setIsClosing(true)
        setTimeout(() => {
            setSelectedSpot(null)
            setIsClosing(false)
        }, 300)
    }

    const openModal = (spot: DataProps ) => {
        setSelectedSpot(spot)
        setIsClosing(false)
    }

    return (
        <div>
            <Header
                header1="Find your next trip"
                header2="Explore Buenavista"
            />
            <div className="flex items-center py-6">
                <Input type="text" name="search" icon="search" placeholder="Search..." />
                <Button icon="tune" className="flex items-center ml-3 justify-center rounded-full bg-blue-200 w-14 h-12"></Button>
            </div>
            <div className="flex flex-col gap-y-3">
                
                <div className="flex flex-col gap-y-4">
                    <HomeSlideShow onClick={openModal} height="10rem" header="Recommended Place" data={MockData} />
                    <HomeSlideShow onClick={openModal} height="12rem" header="Famous Location" data={MockData} />
                    <HomeSlideShow onClick={openModal} height="14rem" header="Hidden Gems" data={MockData} />
                </div>
                
                
                

                {selectedSpot && (
                    <Modal
                        data={selectedSpot} 
                        onClose={closeModal}
                        className={isClosing ? "animate-slideOut" : "animate-slideIn"}
                    >
                        <HomeModal data={selectedSpot}/>
                    </Modal>
                )}
            </div>
        </div>
    )
}

export { Home }