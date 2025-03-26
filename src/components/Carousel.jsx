import React, {useState, useEffect} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
import classNames from 'classnames';
import { useIntl  } from 'react-intl';
import Button from "./Button";
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Carousel({big,small}) {

    let classname = classNames('w-full m-auto py-1 px-4 relative group',{
        "m-w-[1000px] h-[500px]": big,
        "m-w-[100px] h-[300px]": small
    })

    const {auth} = useAuth();

    let intl = useIntl();
    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1578253734010-32bb761af7e3?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          sport: intl.formatMessage({ id: 'Slides1' }),
          hook: intl.formatMessage({ id: 'SlidesText1' })
        },
        {
          url: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          sport: intl.formatMessage({ id: 'Slides2' }),
          hook: intl.formatMessage({ id: 'SlidesText2' })
        },
        {
          url: 'https://images.unsplash.com/photo-1613624071382-72a34057b021?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          sport: intl.formatMessage({ id: 'Slides3' }),
          hook: intl.formatMessage({ id: 'SlidesText3' })
        },
    
        {
          url: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          sport: intl.formatMessage({ id: 'Slides4' }),
          hook: intl.formatMessage({ id: 'SlidesText4' })
        },
        {
          url: 'https://images.unsplash.com/photo-1543633550-f431af584afd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          sport: intl.formatMessage({ id: 'Slides5' }),
          hook: intl.formatMessage({ id: 'SlidesText5' })

        },
      ];

    const [currentIndex,setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);



    const prevImage = () => {
        const firstIndex = currentIndex === 0;

        const nextIndex = firstIndex ? slides.length - 1 : currentIndex - 1;

        setCurrentIndex(nextIndex);
    }

    const nextImage = () => {

        const lastIndex = currentIndex === slides.length - 1

        const nextIndex  = lastIndex ? 0 : currentIndex + 1;

        setCurrentIndex(nextIndex);

    }

    const autoSlider = () => {
        setIsVisible(false); // Hide the text before changing slide
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
          setIsVisible(true); // Show the text after changing slide
      }, 0);
        }

    useEffect(() => {
        const interval = setInterval(autoSlider, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={classname}>
            <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-700'></div>

            <div className="absolute inset-x-0 bottom-0 text-center mb-10">
              <div className="text-center">
                {isVisible && (
                  <>
                    <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold">{slides[currentIndex].sport}</h1>
                    <p className="text-white mt-2 text-2xl md:text-3xl lg:text-4xl ">{slides[currentIndex].hook}</p>
                  </>
                )}

              </div>
            </div>    

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2x1 rounded-full p-2 bg-black/20 text-white cursor-pointer transition duration-500 hover:scale-110'>
                <BsChevronCompactLeft onClick={prevImage} size={30}/>
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2x1 rounded-full p-2 bg-black/20 text-white cursor-pointer transition duration-500 hover:scale-110'>
               <BsChevronCompactRight onClick={nextImage} size={30}/> 
            </div>

            {auth?.username ? (
              <div></div>
            ) : (
              <div className='absolute inset-x-[70%] bottom-5 animate-bounce'>
                <Link to="tournaments">
                    <Button nvgtbutton rounded bigLetter callToAction>{intl.formatMessage({ id: 'CallToAction' })}</Button>
                </Link>
              </div>
            )}


            {/* Show the dots and when cliked go to that image */}
            <div className='flex top-4 justify-center py-2'>
                {slides.map((_slide,slideIndex) => (
                    <div className='text-1xl cursor-pointer' 
                        key={slideIndex} 
                        onClick={() => setCurrentIndex(slideIndex)}>
                    <RxDotFilled />
                    </div>
                ))}

            </div>
        </div>
    )

  
  }


export default Carousel;
