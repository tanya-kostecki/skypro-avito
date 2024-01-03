import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import { ADV_PAGE } from '../../constants/pagesConst';
import { Container } from '../../globalStyles/GlobalStyles';
import MobileFooter from '../../components/footer/MobileFooter';
import MobileReviews from '../../components/mobile-reviews/MobileReviews';

const ReviewsPage = () => {
  return (
    <div>
      <Navigation namePage={ADV_PAGE} />
      <Container>
        <MobileReviews/>
      </Container>
      <MobileFooter />
    </div>
  );
};

export default ReviewsPage;
