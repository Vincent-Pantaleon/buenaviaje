import Link from "next/link"

type ItemType = {
    name: string
    price?: string
    image: string
    description?: string
}

type SlideShowType = {
    header: string
    slides: ItemType[]
}

// Figure out the width problem
const SlideShowItem = ({ name, price, image }: ItemType) => {
    return (
        <div
            className="relative max-h-full rounded-lg overflow-hidden shadow-lg flex-shrink-0"
            style={{
                width: "calc(clamp(150px, 25vw, 200px) - 0.5rem)",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Text content */}
            <div className="absolute bottom-0 left-0 w-full p-2 text-white">
                <h3 className="text-md">{name}</h3>
                {price && <p className="text-xs">From {price}</p>}
            </div>
        </div>
    )
}

const SlideShow = ({ header, slides }: SlideShowType) => {
    return (
        <div className="h-full flex flex-col mt-1">
            <h1 className="font-semibold">{header}</h1>
            <div className="grow flex gap-x-2 overflow-x-auto scrollbar-hide">
                {slides.map((slide, index) => (
                    <SlideShowItem
                        key={index}
                        name={slide.name}
                        price={slide.price}
                        image={slide.image}
                    />
                ))}
            </div>
        </div>
    )
}

export { SlideShow }