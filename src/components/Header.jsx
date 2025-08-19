import shape1 from '../../src/assets/images/shapes/shape.png'
import shape2 from '../../src/assets/images/shapes/shape2.png'
import shape3 from '../../src/assets/images/shapes/shape3.png'

const Header = () => {
  return (
    <header className="w-full flex absolute top-5 left-5">
      <img src={shape1} alt="shape gif" className="h-8 mr-2" />
      <img src={shape2} alt="shape gif" className="h-8 mx-2" />
      <img src={shape3} alt="shape gif" className="h-8 ml-2" />
    </header>
  )
}

export default Header


