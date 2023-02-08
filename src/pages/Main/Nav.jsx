import logo from '../../assets/logo/logo.svg'

const Nav = () => {
  return (
    <div className='w-full block relative z-20'>
        <div className='w-full h-14 bg-black flex items-center justify-between pl-10 pr-10 uppercase'>
            <div className='text-white flex gap-5'>
                <p className='text-primary-color'>we are open</p>
                <p className='text-secondary-color'>7 day a week</p>
            </div>

            <div className='text-white flex gap-10'>
                <p>
                    <span>

                    </span>
                    9400 penatibus
                </p>

                <p>
                    <span>

                    </span>
                    1-366-253-7950
                </p>
            </div>
        </div>

        <div className='flex items-center justify-between mt-5 pl-10 pr-10 text-white'>
            <div>
                <img src={logo} alt="Logo" className='w-24'/>
            </div>

            <nav>
                <ul className='flex gap-10 uppercase text-xs'>
                    <li><a href="">the home</a></li>
                    <li><a href="">services and prices</a></li>
                    <li><a href="">our team</a></li>
                    <li><a href="">contact</a></li>
                    <li><a href="">portfolio</a></li>
                </ul>

            </nav>

            <div>
                <span>Icon</span>
            </div>
        </div>
    </div>
  )
}

export default Nav
