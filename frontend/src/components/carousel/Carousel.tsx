import { useEffect, useRef, useState } from 'react';
import './Carousel.css';

interface CarouselProps {
    items: string[];
}

const Carousel = ({ items = [] }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? items?.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === items?.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const handleTouchStart = (e: TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
        setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            goToNext();
        }
        if (touchStart - touchEnd < -50) {
            goToPrevious();
        }
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener("touchstart", handleTouchStart);
            carousel.addEventListener("touchmove", handleTouchMove);
            carousel.addEventListener("touchend", handleTouchEnd);
        }
        return () => {
            if (carousel) {
                carousel.removeEventListener("touchstart", handleTouchStart);
                carousel.removeEventListener("touchmove", handleTouchMove);
                carousel.removeEventListener("touchend", handleTouchEnd);
            }
        };
    }, [touchStart, touchEnd]);

    return (
        <>
            <div className="carousel" ref={carouselRef}>
                <div
                    className="carouselInner"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="slide">
                            <img src={item} alt={item} />
                        </div>
                    ))}
                </div>
                
                <button className="leftArrow" onClick={goToPrevious}>
                    ❮
                </button>
                <button className="rightArrow" onClick={goToNext}>
                    ❯
                </button>

                <div className="carouselIndicators">
                    {items.map((_, index) => (
                        <div
                            key={index}
                            className={`carouselIndicator ${currentIndex === index ? "active" : ""
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Carousel;