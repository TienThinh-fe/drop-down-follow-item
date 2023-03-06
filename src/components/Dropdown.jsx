import { useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as ArrowIcon } from "../assets/arrow.svg";

const DropdownContainer = styled.div`
  width: 160px;
  height: 40px;
  background-color: hsla(0, 0%, 100%, 0.03);
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  z-index: 1;

  svg {
    position: absolute;
    right: 8px;
  }
`;

const Title = styled.span`
  margin: 0 16px;
`;

const Dropdown = ({ selectedItem, setIsExpanded }) => {
  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  return (
    <DropdownContainer onClick={() => setIsExpanded((prev) => !prev)}>
      <Title>{selectedItem.title}</Title>
      <ArrowIcon />
    </DropdownContainer>
  );
};

export default Dropdown;
