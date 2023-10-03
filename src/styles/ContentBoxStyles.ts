import styled from 'styled-components';

interface ContentBoxProps {
  justifycontent?: string;
}

export const StyledContentBox = styled.div<ContentBoxProps>`
  position: relative;
  box-sizing: border-box;
  font-family: 'Gilroy', sans-serif;
  font-size: 2rem;
  line-height: 1.25;
  text-align: left;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifycontent ?? 'center'};
  & > h2 {
    font-size: 3.5rem;
    text-align: left;
    margin-bottom: 5px;
  }
`;