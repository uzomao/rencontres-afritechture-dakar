import shape from '../../src/assets/images/shapes/shape3.gif'
import video from "../../src/assets/images/video-2.webm"

const PreFooter = () => {
  return (
    <>
    <div className="w-full grid grid-cols-2 items-center text-justify py-section">
        <div className="flex flex-col items-center justify-evenly">
          <blockquote className="text-body-xs p-12">
            <p className="mb-4">To think and act by ourselves and for ourselves...to access modernity without trampling on our authenticity</p>
            <cite>- Leopold Sedar Senghor</cite>
          </blockquote>
        </div>
        <div className='px-12'>
          <h6 className='text-xs float-right text-right text-gold mb-3 uppercase bg-brown p-2 rounded'>Official festival playlist</h6>
          <iframe 
            data-testid="embed-iframe" 
            style={{borderRadius: '12px'}} 
            src="https://open.spotify.com/embed/playlist/0MCU6Z2bepZ5izA3kgBGkd?utm_source=generator" 
            width="100%" 
            height="500" frameBorder="0" allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy" />
        </div>
    </div>
    <div className='flex justify-center w-full bg-teracotta'>
        <img src={shape} alt="shape gif" className="h-48 p-4" />
    </div>
    </>
  )
}

export default PreFooter