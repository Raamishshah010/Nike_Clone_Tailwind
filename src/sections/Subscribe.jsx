
const Subscribe = () => {
    return (
        <section id="contact-us" className="
                max-container 
                flex
                flex-col
                justify-center
                items-center
                max-lg:flex-col
                gap-10
                
                ">


            <h3 className="text-4xl leading-4 font-palanquin font-semibold text-slate-900 max-md:text-4xl">Sign Up For <span
            className="text-coral-red"
            >
                    Updates 
                </span>  & Newsletters
            </h3>

            <div className='flex border-2 w-[60%] mt-5 rounded-xl relative'>
                <input type="text" placeholder="subscribe@nike.com"
                    className="flex-1 sm:flex-1 max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm: p-5 outline-none sm:border-none border max-sm:border-slate-gray max-sm: rounded-full"
                />
                <button className="py-4 bg-coral-red rounded-2xl px-12 text-white absolute right-[-40px] top-1">Sign Up</button>
            </div>
            
        </section>
    )
}

export default Subscribe