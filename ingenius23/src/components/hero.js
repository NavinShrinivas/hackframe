import { ParallaxBanner } from 'react-scroll-parallax';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
export  const Banner = () => {
    return (
     <>
    <div
    className='   text-center min-h-screen '
    >
    <Parallax speed={-15}>
      <div className="    w-full slow">
        <Image
            src="https://media.discordapp.net/attachments/972456002844766228/1091712713010462801/Main_Logo.png?width=1036&height=1036"
            alt="Picture of the author"
            width={500}
            height={500}
            className=' mx-auto'
            />

      </div>
    </Parallax>
    <Parallax speed={15}>

      <div
        className=" text-center  w-full  text-[#fab518] heading text-5xl font-lovelo-line-light lg:text-9xl font-bold "
        >
          <h1
          className=''
          >INGENIUS 2023</h1>
        </div>

    </Parallax>
    </div>
     

     
     </>
    );
  };
  
  