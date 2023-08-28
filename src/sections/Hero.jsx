import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants"

const Hero = () => {

    const [bigShoe, setBigShoe] = useState(bigShoe1);


    return (
        <section
            id="home"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
        >

            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28">

                <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:font-[42px] max-sm:leading-[1] font-bold  max-sm:text-6xl ">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                    <br />
                    <span className="text-coral-red inline-block mt-3">Nike </span> Shoes

                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for
                    your active life. </p>

                <Button label="Shop Now" iconUrl={arrowRight} />

                <div className="flex justify-start items-start flex-wrap mt-20 gap-16 w-full">
                    {
                        statistics.map((stats) => (
                            <div key={stats.label}>
                                <p className="text-4xl font-palanquin font-bold">{stats.value}</p>
                                <p className="font-montserrat leading-6 text-slate-gray">{stats.label}</p>
                            </div>
                        ))
                    }
                </div>
            </div>


            {/* HERO IMAGE */}

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center bg-cover">
                <img src={bigShoe} alt="Hero Shoe Image" width={610} height={500} className="object-contain z-10" />

                <div className="flex 
                sm:gap-6 
                gap-4 
                absolute 
                -bottom-[8%]
                sm:left-[10%]
                max-sm:px-6
                ">
                    {
                        shoes.map((shoe, index) => (
                            <div className="" key={index}>
                                <ShoeCard
                                    imageURL={shoe}
                                    changeBigShoeImage={(shoe) =>
                                        setBigShoe(shoe)
                                    }
                                    bigShoeImage={bigShoe}
                                />
                            </div>
                        ))
                    }
                </div>


            </div>

        </section>
    )
}

export default Hero