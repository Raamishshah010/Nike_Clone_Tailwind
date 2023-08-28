import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img src={imgURL}
                className="
            rounded-full
            object-cover
            w-[120px]
            h-[120px]

            "
                alt={customerName} />

            <p className="
            mt-6
            max-w-sm
            text-center 
            font-montserrat 
            text-md
            info-text
            
            ">{feedback}</p>

            <div className="flex mt-3 gap-2.5 font-montserrat items-center justify-center">
                <img src={star} width={20} height={24}
                    className="object-contain m-0"
                    alt="star" />

                <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
            </div>
            <h3 className="mt-1 font-palanquin text-2xl text-center font-bold">{customerName}</h3>
        </div>
    )
}

export default ReviewCard