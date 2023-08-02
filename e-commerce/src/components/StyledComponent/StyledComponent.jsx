import styled from 'styled-components';

// Create a styled component with the desired font
const StyledText = styled.p`
    font-family: 'Satisfy', cursive;
    font-size: 35px;
    font-weight: bold;
`;

const StyledComponent = ({children}) => {

  return (
    <StyledText>{children}</StyledText>
  )
}

export default StyledComponent