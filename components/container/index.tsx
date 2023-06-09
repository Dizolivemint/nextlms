import styled, { ThemeProvider, createGlobalStyle, css } from 'styled-components';
import { myTheme } from '@/styles/theme';

type ContainerProps = {
  children: React.ReactNode;
  size?: [number, number];
  alignItems?: string;
};

const StyledContainer = styled.div<ContainerProps>`
  background-color: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.textColor};
  display: flex;
  flex-direction: column;
  height: ${props => props.size ? props.size[0] : 'auto'};
  width: ${props => props.size ? props.size[1] : '100%'};
  justify-content: center;
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  text-align: ${props => props.alignItems ? props.alignItems : 'center'};
  padding: 0 0.5rem;
  font-size: calc(10px + 2vmin);
  margin: 1rem;
`;

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  return (
    <ThemeProvider theme={myTheme}>
      <StyledContainer>
        {props.children}
      </StyledContainer>
    </ThemeProvider>
  );
};

export default Container;