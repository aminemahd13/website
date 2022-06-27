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
          <a href="https://www.wizardingworld.com/writing-by-jk-rowling/pensieve">
              a collection of memories
          </a>
        </p>
      </header>
    </StyledContactSection>
  );
};

export default Projecthero;


/*


import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout} from '@components';

const StyledMainContainer = styled.main`
  & > header {
    margin-bottom: 100px;
    text-align: center;

    a {
      &:hover,
      &:focus {
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>")
            20 0,
          auto;
      }
    }
  }

footer {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    margin-top: 20px;
  }`;

  










const ProjectPage = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <Helmet title="Pensieve" />

      <StyledMainContainer>
        <header>
          <h1 className="big-heading">Pensieve</h1>
          <p className="subtitle">
            <a href="https://www.wizardingworld.com/writing-by-jk-rowling/pensieve">
              a collection of memories
            </a>
          </p>
        </header>
        
      </StyledMainContainer>
    </Layout>
  );
};

ProjectPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ProjectPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" }, frontmatter: { draft: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            slug
            date
            tags
            draft
          }
          html
        }
      }
    }
  }
`;

*/