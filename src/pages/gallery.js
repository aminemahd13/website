import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Galleryhero, Gallery } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const GalleryPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Galleryhero />
      <Gallery />
    </StyledMainContainer>
  </Layout>
);

GalleryPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default GalleryPage;