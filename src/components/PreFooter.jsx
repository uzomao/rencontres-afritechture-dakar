import shape from '../../src/assets/images/shapes/shape3.gif'

const PreFooter = () => {
  return (
    <>
    <div className="w-full grid grid-cols-2 mt-12 items-center text-justify">
        <div className="flex flex-col items-center justify-evenly h-full">
          <blockquote className="text-body-xs mt-12 p-12">
            <p className="mb-4">To think and act by ourselves and for ourselves...to access modernity without trampling on our authenticity</p>
            <cite>- Leopold Sedar Senghor</cite>
          </blockquote>
        </div>
        <div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full p-18"
            >
            <source src="../src/assets/images/video-2.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
    <div className='flex justify-center w-full'>
        <img src={shape} alt="shape gif" className="h-48 p-4" />
    </div>
    </>
  )
}

export default PreFooter