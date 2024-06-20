import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
// import { Transition } from 'react-transition-group';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const HeroText = styled.div`
  animation: ${(props) => (props.fadeType === 'in' ? fadeIn : fadeOut)} 3s
    forwards;
`;

function Hero() {
  const [text, setText] = useState('We Think More');
  const [fadeType, setFadeType] = useState('in');

  useEffect(() => {
    const timeout1 = setTimeout(() => setFadeType('out'), 3000); // Change to fade out after 2 seconds
    const timeout2 = setTimeout(() => {
      setText(
        <>
          Design <br />
          &nbsp;&nbsp;&nbsp;Less
        </>
      );
      setFadeType('in');
    }, 4000); // Change text and fade in after 3 seconds

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [text]);

  return (
    <main>
      <section class="hero">
        {/* <div class="hero-text">We Think More</div> */}
        <HeroText fadeType={fadeType} className="hero-text">
          {text}
        </HeroText>
        {/* style="max-width: 100%;height: auto; display:flex" */}
        <img src="star.svg" alt="" />
        <div class="hero-paragraph">
          Da Hyper Design is a bespoke design service company. Our focus is to
          consistently surpass client expectations by creating striking designs
          with HCI and to captivate audiences, evoke emotions, and create
          meaningful connections.
        </div>
      </section>
    </main>
  );
}

export default Hero;
