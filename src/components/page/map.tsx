'use client'

import { createClient } from "@/utils/supabase/client";

import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "../input";
import { Button } from "../button";
import { useRouter } from "next/navigation";

// Fix default marker path issues with Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/marker-icon-2x.png",
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
});

type ResultType = {
    name: string
    longitude: number
    latitude: number
    tags: Object
}

const filters = [
    { name: "beach" },
    { name: "event" },
    { name: "park" },
    { name: "kids" }
]

const MapView = () => {
    const center: [number, number] = [8.974, 125.410]
    const supabase = createClient()
    const router = useRouter()

    const [data, setData] = useState<ResultType[] | null>(null)
    const [selectedLocation, setSelectedLocation] = useState<ResultType | null>(null)
    const [openFilter, setOpenFilter] = useState<boolean>(false)

    useEffect(() => {
        const GetLocationsData = async () => {
            const { data, error } = await supabase
            .from('locations')
            .select('name, longitude, latitude, tags')

            if (error) {
                return {status: 500, message: "Error Fetching data", data: data}
            }

            return { status: 200, message: "Fetch Successful", data: data}
        }

        GetLocationsData().then((result) => {
            if (result.status === 200) {
                // do something with the data
                setData(result.data)
            }
        });
    }, [])

    return (
        <div className="relative h-screen w-full">

            <div className="absolute top-8 px-6 w-full" style={{ zIndex: 1000 }}>
                <Button icon="close" onClick={() => router.back()} />
                <div className="w-full flex gap-2">
                    <Input type="text" name="search" icon="search" placeholder="Search..." />
                    <Button icon="discover_tune" className="bg-text-active rounded-lg w-12" onClick={() => {setOpenFilter(true); setSelectedLocation(null)}}></Button>
                </div>
            </div>

            <MapContainer
                center={center} // latitude & longitude
                zoom={12}
                scrollWheelZoom={true}
                style={{ height: "100vh", width: "100%" }}
                zoomControl={false}
            >
            {/* TileLayer is the actual map tiles (we’ll use OpenStreetMap here) */}
                <TileLayer url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png" />
                <TileLayer url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_only_labels/{z}/{x}/{y}.png" />

                {/* Example Marker with Popup */}
                {data?.map((location, index) => (
                    <Marker 
                        key={index} 
                        position={[location.latitude, location.longitude]} 
                        eventHandlers={{
                            click: () => {setSelectedLocation(location); setOpenFilter(false)}
                        }}

                    >
                        <Popup>
                            {location.name}
                        </Popup>
                    </Marker>

                ))}
                
            </MapContainer>

            {/* Replace with a better modals */}
            {selectedLocation && (
                <div className="absolute bottom-0 left-0 w-full p-2 h-fit rounded-t-2xl" style={{ zIndex: 1000 }}>
                    <div className="bg-white rounded-2xl p-4 shadow-2xl">
                        <div className="flex justify-end items-center">
                            <button onClick={() => setSelectedLocation(null)}>
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>
                        
                        <div className="flex gap-x-2">
                            <Image src="/alicia.jpg" alt={`${selectedLocation.name}`} width={120} height={200} className="rounded-lg"/>
                            <div className="flex flex-col gap-y-3">
                                <p className="font-bold">{selectedLocation.name}</p>
                                <p className="font-poppins">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur labore cupiditate, reiciendis est adipisci incidunt natus.</p>
                                <p>Stars here</p>
                                <div className="self-end">
                                    <button className="flex">Explore <span className="material-symbols-outlined">arrow_right</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {openFilter && (
                <div className="absolute bottom-0 left-0 w-full p-2 h-fit rounded-t-2xl" style={{ zIndex: 1000 }}>
                    <div className="bg-white p-4 shadow-2xl flex flex-col gap-y-2">
                        <div className="flex justify-end items-center" >
                            <button onClick={() => setOpenFilter(false)}>
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>
                        <h2>Please select Filters</h2>
                        <div>
                            {filters.map((item, index) => (
                                <div key={index}>
                                    <input type="checkbox" id={item.name} name={item.name}/>
                                    <label htmlFor={item.name} className="ml-2">{item.name.charAt(0).toLocaleUpperCase() + item.name.slice(1)}</label>
                                </div>
                            ))}

                            <div className="flex justify-end">
                                <button className="bg-text-active p-2 rounded-2xl">Confirm</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )}
        </div>
        
    )
}

export default MapView
