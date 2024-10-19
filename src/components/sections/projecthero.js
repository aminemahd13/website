import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { Helmet } from 'react-helmet';

const StyledContactSection = styled.section`
margin-top: auto;
margin-bottom: 15px;
padding-top: 200px;
text-align: center;



.subtitle {

  font-size: clamp(10px, 4vw, 23px);
  font-weight: 200;

}

h1 {
    margin: 0 0 10px 4px;

    font-size: clamp(55px, 8vw, 85px);
    font-weight: 700;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }



a {
  &:hover,
  &:focus {
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>")
        20 0,
      auto;
  }
}
}
`;

const Projecthero = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (

    <StyledContactSection className="fillHeight">
      <Helmet title="Projects" />

      <header>
        <h1 className="big-heading">PROJECTS</h1>
        <p className="subtitle">

        </p>
      </header>
    </StyledContactSection>
  );
};

export default Projecthero;

