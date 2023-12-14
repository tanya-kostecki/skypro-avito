import styled from 'styled-components';

export const ReviewsModal = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 999;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ReviewsContainer = styled.div`
  width: 800px;
  height: 900px;
  border-radius: 12px;
`;
export const ReviewsMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px 42px 50px;
  border-radius: 12px;
  background-color: white;
  position: relative;
`;

export const ReviewAddTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 32px;
  text-align: left;
`;
export const ReviewsInput = styled.textarea`
  width: 652px;
  height: 100px;
  border-radius: 6px;
  border: 1px solid;
  padding-top: 10px;
  padding-left: 19px;
  margin-bottom: 14px;

  :placeholder {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const ReviewsInfo = styled.div`
  width: 652px;
  height: 580px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ReviewsComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-y: scroll;
`;
export const ReviewsTextBlock = styled.div`
  display: flex;
  gap: 12px;
`;
export const ReviewsName = styled.span`
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;
export const ReviewsDate = styled.span`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  color: #5f5f5f;
`;
export const Comment = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;
