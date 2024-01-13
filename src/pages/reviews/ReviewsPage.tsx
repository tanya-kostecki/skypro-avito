import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import { ADV_PAGE } from '../../constants/pagesConst';
import { Container } from '../../globalStyles/GlobalStyles';
import MobileFooter from '../../components/footer/MobileFooter';
import Reviews from '../../components/modals/reviews/Reviews';
import { useGetCommentsByAdQuery } from '../../services/adverts';
import { useParams } from 'react-router-dom';

const ReviewsPage = () => {
  const params = useParams();
  const advertId = Number(params.id);

  const { data: reviews } = useGetCommentsByAdQuery({ pk: advertId });

  return (
    <div>
      <Navigation namePage={ADV_PAGE} />
      <Container>
        {reviews && (
          <Reviews adId={advertId} comments={reviews}/>
        )}
      </Container>
      <MobileFooter />
    </div>
  );
};

export default ReviewsPage;
