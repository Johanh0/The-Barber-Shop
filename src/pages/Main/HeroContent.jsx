const HeroContent = () => {
    return (
      <div className="absolute z-10 flex justify-center items-center flex-col w-1/2 h-screen top-0  text-white">
        <div className="p-24">
            <div className="text-center uppercase font-bold">
                <h1 className="text-5xl mb-1">the barber shop</h1>
                <h2 className="text-1xl text-center">expert haircuts and grooming services</h2>
            </div>

            <div className=" flex m-auto mt-5">
                <p className="text-sm leading-6">At The Finest Barbershop, we offer a wide range of professional hair cutting and grooming services for men. Our experienced barbers use the latest techniques and tools to give you the perfect look. Whether you're in need of a classic haircut, straight razor shave, or beard trim, we've got you covered.</p>
            </div>
        </div>
      </div>
    )
  }
  
  export default HeroContent