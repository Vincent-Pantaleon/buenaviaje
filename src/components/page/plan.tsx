'use client'

import { Header } from "../ui/header"
import { TimelineContainer } from "../ui/timeline"
import { useState } from "react"
import { DataLocationType } from "./itinerary"

const MockData = { day: 1, date: "June 12", location: [
    { location: 1, description: "View the beautiful scenery", time: "7:30", weather: "rainy" },
    { location: 2, description: "View the beautiful scenery", time: "7:30", weather: "rainy" },
    { location: 3, description: "View the beautiful scenery", time: "7:30", weather: "rainy" },
    { location: 4, description: "View the beautiful scenery", time: "7:30", weather: "rainy" },
]}

const Plan = () => {
    const [selectedLocation, setSelectedLocation] = useState<DataLocationType | null>(null)

    const SelectItemLocation = (item: DataLocationType) => {
        if (selectedLocation?.location === item.location) {
            setSelectedLocation(null);
        } else {
            setSelectedLocation(item);
        }
    }

    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex justify-between">
                <Header
                    header1="Maayong Buntag"
                    header2="Juan De La Cruz"
                />
                <div className="bg-monotone px-4 py-3 rounded-full outline self-center">
                    <span className="material-symbols-outlined">account_circle</span>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="bg-green-400 w-full">
                    <img src="/alicia.jpg" alt="picture" className="rounded-xl w-full"/>
                </div>
            </div>

            <div>
                <h1 className="font-bold font-poppins">Schedule</h1>
                <TimelineContainer
                    selectedItem={MockData}
                    selectedLocation={selectedLocation}
                    onSelectLocation={SelectItemLocation}
                />
            </div>
            
        </div>
    )
}

export { Plan }