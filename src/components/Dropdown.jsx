import styled from "styled-components"

import { ReactComponent as ArrowIcon } from "../assets/arrow.svg"

const DropdownContainer = styled.div`
  width: 160px;
  height: 40px;
  background-color: hsla(0, 0%, 100%, 0.03);
  border-radius: 8px;
  display: flex;
  align-items: center
  cursor: pointer;
`;

const Title = styled.span`
  margin: 0 16px
`

const Dropdown = () => {
  return <DropdownContainer>
    <Title>
      Dropdown
    </Title>
    <ArrowIcon />
    </DropdownContainer>
}

export default Dropdown