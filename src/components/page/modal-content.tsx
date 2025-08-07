import { Button } from "../button"
import { StarRating } from "../ui/review"
import { DataProps } from "../home-slideshow"

interface HomeModalProps {
    data: DataProps
}

const HomeModal = ({
    data
}: HomeModalProps) => {
    return (
        <div className="text-white flex flex-col gap-y-6 px-6 pb-10">
            <h1 className="text-4xl font-baloo font-extrabold">{data.name}</h1>
            
            <p>{data.description}</p>
            
            <div className="flex justify-between">
                <StarRating rating={5} />
                <Button className="hover:underline hover:underline-offset-1">See reviews</Button>
            </div>
            
            <div className="flex justify-evenly">
                <Button className="bg-text-active rounded-4xl h-14 w-[40%]">
                    Add to plan
                </Button>
                <Button className="bg-text-active rounded-4xl h-14 w-[40%]">
                    View others
                </Button>
            </div>
        </div>
    )
}

export { HomeModal }