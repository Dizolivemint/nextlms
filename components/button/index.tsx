import styled, { keyframes, createGlobalStyle, css } from 'styled-components';

type ButtonProps = {
  children: React.ReactNode;
  isActive?: boolean;
  isEnabled?: string;
  color?: string;
  size?: string;
  column?: boolean;
  isCircle?: boolean;
  isRounded?: boolean;
};

const breatheAnimation = keyframes`
 0% { opacity: 1; }
 50% { opacity: 0.1; }
 100% { opacity: 1; }
`

const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => props.isEnabled ? props.theme.colors.fg : props.theme.colors.bg };
  border-color: ${props => props.isActive ? props.theme.colors.borderColor : props.theme.colors.borderColorHighlight };
  border: 2px solid;
  border-radius: ${props => props.isRounded ? '20px' : '4px'};
  color: ${props => props.color || props.theme.colors.textColor};
  padding: 1rem;
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  width: 100%;
  font-size: 2rem;
  justify-content: center;
  &:hover {
    animation-name: ${breatheAnimation};
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }
  margin-bottom: 1rem;
`

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { isActive, isEnabled, children, color } = props;

  return (
    <StyledButton 
      isActive={isActive}
      isEnabled={isEnabled}
      color={color}
    >
      {children}
    </StyledButton>
  );
};

export default Button;