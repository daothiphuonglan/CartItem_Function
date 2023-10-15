import React, { useState, useEffect } from 'react';


import data from '../data/dataHome.json';


function HeaderHome() {
  const [pizzas, setPizza] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = pizzas.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, pizzas]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      
      <div className="section-center">
        {pizzas.map((pizza, personIndex) => {
          const { id, image } = pizza;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === pizzas.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image}  className="person-img" />
             
              
            </article>
          );
        })}
        
      </div>
    </section>
  );
}

export default HeaderHome;