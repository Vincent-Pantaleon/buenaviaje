'use client'

import { useState } from "react"

import { MenuCarousel } from "../menu-carousel"
import { TimelineContainer } from "../ui/timeline"
import { Header } from "../ui/header"
import { Button } from "../button"

export type ItineraryDataTypes = {
    day: number
    date: string
    location: DataLocationType[]
}

export type DataLocationType = {
    location: number
    description: string
    time: string
    weather: string
}

const MockData = [
    { day: 1, date: "June 12", location: [
        { location: 1, description: "View the beautiful scenery", time: "7:30", weather: "rainy" },
        { location: 2, description: "View the beautiful scenery", time: "7:30", weather: "rainy" },
        { location: 3, description: "View the beautiful scenery", time: "7:30", weather: "rainy" },
        { location: 4, description: "View the beautiful scenery", time: "7:30", weather: "rainy" },
    ]},
    { day: 2, date: "June 13", location: [
        { location: 1, description: "View the beautiful scenery", time: "8:30", weather: "sunny" },
        { location: 2, description: "View the beautiful scenery", time: "8:30", weather: "sunny" },
        { location: 3, description: "View the beautiful scenery", time: "8:30", weather: "sunny" },
        { location: 4, description: "View the beautiful scenery", time: "8:30", weather: "sunny" },
    ]},
    { day: 3, date: "June 14", location: [
        { location: 1, description: "View the beautiful scenery", time: "9:30", weather: "sunny" },
        { location: 2, description: "View the beautiful scenery", time: "9:30", weather: "sunny" },
        { location: 3, description: "View the beautiful scenery", time: "9:30", weather: "sunny" },
        { location: 4, description: "View the beautiful scenery", time: "9:30", weather: "sunny" },
        { location: 5, description: "View the beautiful scenery", time: "9:30", weather: "sunny" },
        { location: 6, description: "View the beautiful scenery", time: "9:30", weather: "sunny" },
        { location: 7, description: "View the beautiful scenery", time: "9:30", weather: "sunny" },
        { location: 8, description: "View the beautiful scenery", time: "9:30", weather: "sunny" },
        { location: 9, description: "View the beautiful scenery", time: "9:30", weather: "sunny" },
    ]},
    { day: 4, date: "June 15", location: [
        { location: 1, description: "View the beautiful scenery", time: "8:30", weather: "sunny" },
        { location: 2, description: "View the beautiful scenery", time: "8:30", weather: "sunny" },
        { location: 3, description: "View the beautiful scenery", time: "8:30", weather: "sunny" },
        { location: 4, description: "View the beautiful scenery", time: "8:30", weather: "sunny" },
    ]},
    { day: 5, date: "June 16", location: [
        { location: 1, description: "View the beautiful scenery", time: "8:30", weather: "sunny" },
        { location: 2, description: "View the beautiful scenery", time: "8:30", weather: "sunny" },
        { location: 3, description: "View the beautiful scenery", time: "8:30", weather: "sunny" },
        { location: 4, description: "View the beautiful scenery", time: "8:30", weather: "sunny" },
    ]},
    { day: 6, date: "June 17", location: [
        { location: 1, description: "View the beautiful scenery", time: "8:30", weather: "sunny" },
        { location: 2, description: "View the beautiful scenery", time: "8:30", weather: "sunny" },
        { location: 3, description: "View the beautiful scenery", time: "8:30", weather: "sunny" },
        { location: 4, description: "View the beautiful scenery", time: "8:30", weather: "sunny" },
    ]},
]

const Itinerary = () => {
    const [selectedItem, setSelectedItem] = useState<ItineraryDataTypes | null>(null)
    const [selectedLocation, setSelectedLocation] = useState<DataLocationType | null>(null)
    
    const SelectItem = (item: ItineraryDataTypes) => {
        if (selectedItem?.day === item.day) {
            setSelectedItem(null)
            setSelectedLocation(null) // Clear location when deselecting day
        } else {
            setSelectedItem(item)
            setSelectedLocation(null) // Clear previous location selection
        }
    }

    const SelectItemLocation = (item: DataLocationType) => {
        if (selectedLocation?.location === item.location) {
            setSelectedLocation(null);
        } else {
            setSelectedLocation(item);
        }
    }

    return (
        <div className="flex flex-col h-full">
            <Header 
                header1="Your journery starts here"
                header2="Itinerary"
            />

            <MenuCarousel selectedItem={selectedItem} onItemClick={SelectItem} data={MockData}/>

            <TimelineContainer
                selectedItem={selectedItem}
                selectedLocation={selectedLocation}
                onSelectLocation={SelectItemLocation}
            />
            
            {selectedLocation && (
                <Button className="h-16 rounded-2xl bg-text-active mt-4">
                    View Specific Itinerary
                </Button>
            )}
        </div>
    )
}

export { Itinerary }