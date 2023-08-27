import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffer = () => {
    return (
        <section
            className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container"
        >

            <div>
                <img src={offer} alt="offer image"
                    width={773}
                    height={687}
                    className="object-contain w-full"
                />
            </div>


            <div
                className="flex flex-1 flex-col "
            >
                <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    <span className="text-coral-red inline-block mt-3">Special </span> Shoes
                </h2>
                <p className='mt-4 info-text'>
                    Embark on a shopping journey that redefines your experience with
                    unbeatable deals. From premier selections to incredible savings, we
                    offer unparalleled value that sets us apart.
                </p>
                <p className='mt-6 info-text'>
                    Navigate a realm of possibilities designed to fulfill your unique
                    desires, surpassing the loftiest expectations. Your journey with us is
                    nothing short of exceptional.
                </p>

                <div className='mt-11 flex flex-wrap gap-5'>

                    <Button label="Shop Now" iconUrl={arrowRight} />
                    <button className="bg-white text-slate-800 border-gray-400 border-2 px-9 rounded-3xl
                        text-lg
                        font-montserrat
                        leading-7
                    ">Learn More</button>
                </div>

            </div>

        </section>
    )
}

export default SpecialOffer