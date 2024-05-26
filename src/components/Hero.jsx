import Sidebar from './Sidebar'
import Mainbar from './Mainbar'

const Hero = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-2 h-svh'>
        <Sidebar />
        <Mainbar />
    </div>
  )
}

export default Hero