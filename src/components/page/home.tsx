'use client'

import { Input } from "../input"
import { Header } from "../header"
import { SlideShow } from "../slideshow"

const MockData = [
    {name: "Alicia's Ridge", image: "/alicia.jpg", price: "1,000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam unde molestias enim incidunt voluptatibus quisquam optio asperiores velit ex temporibus quo, provident, ipsum perferendis sequi dolorum eius itaque iste harum!"},
    {name: "Alicia's Ridge", image: "/alicia.jpg", price: "1,000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam unde molestias enim incidunt voluptatibus quisquam optio asperiores velit ex temporibus quo, provident, ipsum perferendis sequi dolorum eius itaque iste harum!"},
    {name: "Alicia's Ridge", image: "/alicia.jpg", price: "1,000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam unde molestias enim incidunt voluptatibus quisquam optio asperiores velit ex temporibus quo, provident, ipsum perferendis sequi dolorum eius itaque iste harum!"},
    {name: "Alicia's Ridge", image: "/alicia.jpg", price: "1,000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam unde molestias enim incidunt voluptatibus quisquam optio asperiores velit ex temporibus quo, provident, ipsum perferendis sequi dolorum eius itaque iste harum!"},
]

const CategoriesData = [
    { name: "Beaches", image: "/alicia.jpg"},
    { name: "Restaurants", image: "/alicia.jpg"},
    { name: "Bars", image: "/alicia.jpg"},
    { name: "Snacks", image: "/alicia.jpg"},
]

const Home = () => {
    return (
        <div className="flex flex-col h-full"> {/* ← important: make this a flex column container */}
            <Header
                header1="Find your next trip"
                header2="Explore Buenavista"
            />

            <div className="flex items-center py-3">
                <Input type="text" name="search" icon="search" placeholder="Search..." />
            </div>

            {/* Add Carousels Here */}
            <div className="grow flex flex-col gap-y-5">
                <div className="h-1/2">
                    <SlideShow
                        header="Popular Locations"
                        slides={MockData}
                    />
                </div>
                <div className="h-1/2">
                    <SlideShow
                        header="Popular Categories"
                        slides={CategoriesData}
                    />
                </div>
            </div>
        </div>
    )

}

export { Home }