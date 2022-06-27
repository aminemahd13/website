import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Projecthero, Featured, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const ProjectPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Projecthero />
      <Featured />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

ProjectPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ProjectPage;
