import { useState } from 'react';


import {
    Carousel,
     CarouselItem,
     CarouselControl,
     CarouselIndicators,
     CarouselCaption,
 } from 'reactstrap';
   
 const items = [
     {
       src: '/images/hero-img.png',
       altText: 'Enjoy Your Healthy Delicious Food',
       caption: 'Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.',
       key: 1,
     },
     {
       src: '/images/dinner2.png',
       altText: 'Your delecious breakfast is here',
       caption: 'Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.',
       key: 2,
     },
     {
       src: '/images/dinner6.png',
       altText: 'Helthy diet for healty living',
       caption: 'Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.',
       key: 3,
     },
   ];
   

   
const Slider = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };
  
    const slides = items.map((item, index) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={index}

        >
        <div className='container'>
          <div className='narrown'>
          <div className='slideimg'>
            <img  src={item.src} alt={item.altText} />
          </div>
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.altText}
            
          />
          
          </div>
          </div>
        </CarouselItem>
      );
    });

    return (
    <div>

    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
     
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
     
          {slides}
      
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
      

        </div>
    );
};

export default Slider;