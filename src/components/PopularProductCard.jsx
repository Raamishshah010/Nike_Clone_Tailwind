
import { star } from '../assets/icons'
const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />

            <div className="mt-8 flex justify-start  gap-2.5">
                <img src={star} alt="star" width={14} height={14} className="" />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>

            </div>
            <h3 className='text-2xl mt-2 mb-5 leading-8 font-semibold font-palanquin text-slate-800'>{name}</h3>
            <p className="font-montserrat text-xl leading-normal text-coral-red font-semibold">{price}</p>
        </div>
    )
}

export default PopularProductCard