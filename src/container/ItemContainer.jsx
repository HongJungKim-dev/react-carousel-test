import React from 'react';
import styled from 'styled-components';

const ItemContainer = ({ children, showingSlideCardNum, slidingSize, handleTransitionEnd, itemGap }) => {
  return (
    <StyledItemContainer showingSlideCardNum={showingSlideCardNum} slidingSize={slidingSize} onTransitionEnd={handleTransitionEnd} itemGap={itemGap}>
      {children.map((child, idx) => (
        <StyledItem key={`cardContainer-${idx}`} showingSlideCardNum={showingSlideCardNum} itemGap={itemGap}>
          {child}
        </StyledItem>
      ))}
    </StyledItemContainer>
  );
};

const StyledItemContainer = styled.ul`
  display: flex;
  width: calc(100% + ${({ itemGap }) => itemGap});
  transition: transform 1s linear 0s;
  transform: translateX(${({ slidingSize }) => slidingSize}%);
  margin-left: calc(-${({ itemGap }) => itemGap} / 2);
`;

const StyledItem = styled.li`
  flex-shrink: 0;
  width: calc(${({ showingSlideCardNum }) => (1 / showingSlideCardNum) * 100}% - ${({ itemGap }) => itemGap});
  height: calc(${({ showingSlideCardNum }) => (1 / showingSlideCardNum) * 100}% - ${({ itemGap }) => itemGap});
  margin: 0 calc(${({ itemGap }) => itemGap} / 2);
`;

export default ItemContainer;
