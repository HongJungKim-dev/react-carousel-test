import React, { useState } from 'react';
import styled from 'styled-components';

import CarouselButton from './CarouselButton';
import ItemContainer from '../container/ItemContainer';

const Carousel = ({ children, showingSlideCardNum, itemGap, buttonSizeOnBothSide }) => {
  const [slidingSize, setSlidingSize] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const handleTransitionEnd = () => {
    setIsMoving(false);
  };

  const handleClickSlide = (movingSlidingSize) => {
    setIsMoving(true);
    setSlidingSize(slidingSize + movingSlidingSize);
  };

  return (
    <StyledContainer buttonSizeOnBothSide={buttonSizeOnBothSide}>
      <CarouselButton
        showingSlideCardNum={showingSlideCardNum}
        handleClickSlide={handleClickSlide}
        cardNum={children.length}
        isMoving={isMoving}
        buttonSizeOnBothSide={buttonSizeOnBothSide}
      />
      <StyledWrapper itemGap={itemGap} buttonSize={buttonSizeOnBothSide}>
        <ItemContainer
          showingSlideCardNum={showingSlideCardNum}
          slidingSize={slidingSize}
          handleTransitionEnd={handleTransitionEnd}
          itemGap={itemGap}
        >
          {children}
        </ItemContainer>
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledWrapper = styled.div`
  overflow: hidden;
`;

const StyledContainer = styled.section`
  position: relative;
  margin: 0 ${({ buttonSizeOnBothSide }) => buttonSizeOnBothSide};
`;

export default Carousel;
