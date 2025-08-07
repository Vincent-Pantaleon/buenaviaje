import { DataLocationType, ItineraryDataTypes } from "../page/itinerary"
import { Button } from "../button"

// Types
interface TimelineItemProps {
    item: DataLocationType
    isSelected: boolean
    onSelect: (item: DataLocationType) => void
}

interface TimelineListProps {
    items: DataLocationType[]
    selectedLocation: DataLocationType | null
    onSelectLocation: (item: DataLocationType) => void
}

interface TimelineContainerProps {
    selectedItem: ItineraryDataTypes | null
    selectedLocation: DataLocationType | null
    onSelectLocation: (item: DataLocationType) => void
}

// Individual Timeline Item Component
const TimelineItem = ({
    item,
    isSelected,
    onSelect
}: TimelineItemProps) => {
    return (
        <Button 
            className="flex justify-between w-full timeline-item"
            onClick={() => onSelect(item)}
        >
            <div className="flex items-center">{item.time}</div>
            <div className="flex items-center circle-container">
                <span className={`material-symbols-outlined ${isSelected ? "text-gold" : "text-gray-400"}`}>
                    {isSelected ? "explore_nearby" : "circle"}
                </span>
            </div>
            <div className="text-start">
                <p>Location #{item.location}</p>
                <p className="text-slate-400">{item.description}</p>
            </div>
            <div className="flex items-center">
                <span className="material-symbols-outlined text-gray-400">{item.weather}</span>
            </div>
        </Button>
    )
}

// Timeline List Component (renders multiple items)
const TimelineList = ({
    items,
    selectedLocation,
    onSelectLocation
}: TimelineListProps) => {
    return (
        <div className="flex items-center justify-center flex-col gap-y-5 px-4">
            {items.map((item, index) => (
                <TimelineItem
                    key={index}
                    item={item}
                    isSelected={selectedLocation?.location === item.location}
                    onSelect={onSelectLocation}
                />
            ))}
        </div>
    )
}

// Main Timeline Container Component
const TimelineContainer = ({
    selectedItem,
    selectedLocation,
    onSelectLocation
}: TimelineContainerProps) => {
    return (
        <div className="flex-1 overflow-y-auto py-4 font-jamjuree timeline-container">
            {selectedItem ? (
                <TimelineList
                    items={selectedItem.location}
                    selectedLocation={selectedLocation}
                    onSelectLocation={onSelectLocation}
                />
            ) : (
                <div className="text-center py-4">Please select a day</div>
            )}
        </div>
    )
}

export { TimelineItem, TimelineList, TimelineContainer }