import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { ItineraryDataTypes } from "./page/itinerary"

interface MenuCarouselProps {
    data: ItineraryDataTypes[]
    selectedItem: ItineraryDataTypes | null
    onItemClick: (item: ItineraryDataTypes) => void
}

const MenuCarousel = ({
  data,
  selectedItem,
  onItemClick
}: MenuCarouselProps) => {
  return (
    <div className="w-full">
      <Carousel>
        <CarouselContent>
          {data.map((item, index) => {
            const isSelected = selectedItem?.day === item.day

            return (
              <CarouselItem key={index} className="basis-1/3">
                <div
                  className={`flex flex-col items-center py-3 cursor-pointer border-b-4 transition-colors duration-200 ${
                    isSelected ? "border-text-active" : "border-transparent"
                  }`}
                  onClick={() => onItemClick(item)}
                >
                  <p>Day {item.day}</p>
                  <p>{item.date}</p>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export { MenuCarousel }