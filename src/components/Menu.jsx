import { useEffect, useState } from "react";
import styled from "styled-components";

import useDropdown from "../hooks/useDropdown";

const MenuContainer = styled.div`
  width: 160px;
  background-color: rgb(24 23 23);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${({ top }) => -top}px;
  z-index: 2;
`;

const Items = styled.div`
  width: 120px;
  height: 20px;
  padding: 8px;
  margin: 8px auto;
  border-radius: 4px;
  background-color: ${({ isSelected }) =>
    isSelected ? "hsla(0, 0%, 100%, 0.1)" : "transparent"};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: hsla(0, 0%, 100%, 0.1);
  }
`;

const Menu = ({ selectedItem, items, isShown, setIsExpanded, onClickItem }) => {
  const handleClick = (item) => {
    setIsExpanded(false);
    onClickItem(item);
  };

  const { calculatePosition } = useDropdown();

  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(calculatePosition(selectedItem.id - 1, 40, 8));
  }, [selectedItem]);

  return (
    <MenuContainer top={top}>
      {isShown &&
        items.map((item) => (
          <Items
            key={item.id}
            isSelected={item.id === selectedItem.id}
            onClick={() => handleClick(item)}
          >
            {item.title}
          </Items>
        ))}
    </MenuContainer>
  );
};

export default Menu;
