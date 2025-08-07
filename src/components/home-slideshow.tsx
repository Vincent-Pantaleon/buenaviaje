import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export interface DataProps {
    name: string
    image: string
    price: string
}

type SlideShowType = {
    data: DataProps[]
    header: string
    height: string
    onClick: (spot: DataProps) => void
}

const HomeSlideShow = ({ data, header, height, onClick }: SlideShowType) => {
    return (
        <div className="relative w-full max-w-full h-fit">
            <h1 className="font-bold font-jamjuree">{header}</h1>

            <Carousel className="w-full rounded-2xl">
                <CarouselContent className="h-full">
                    {data.map((item, index) => (
                        <CarouselItem key={index} className="basis-1/2" onClick={() => onClick(item)}>
                            <div
                                className="relative flex flex-col items-start justify-end border rounded-lg overflow-hidden shadow-lg bg-white p-4"
                                style={{
                                    height: height,
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                                <div className="text-white">
                                    <p className="font-bold text-lg font-baloo">{item.name}</p>
                                    <p className="font-jamjuree">From ₱{item.price}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}


export { HomeSlideShow }