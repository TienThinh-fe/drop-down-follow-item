import styled from "styled-components";
import { useState } from "react";
import Dropdown from "./components/Dropdown";
import Menu from "./components/Menu";

const Wrapper = styled.div`
  position: relative;
  width: 160px;
`;

const App = () => {
  const items = [
    {
      id: 1,
      title: "Tien Thinh",
    },
    {
      id: 2,
      title: "Dinh Duc",
    },
    {
      id: 3,
      title: "Son Ha",
    },
    {
      id: 4,
      title: "Ngoc Toan",
    },
    {
      id: 5,
      title: "Anh Duc",
    },
  ];
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Wrapper>
        <Dropdown
          selectedItem={selectedItem}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
        <Menu
          items={items}
          selectedItem={selectedItem}
          isShown={isExpanded}
          setIsExpanded={setIsExpanded}
          onClickItem={setSelectedItem}
        />
      </Wrapper>
    </div>
  );
};

export default App;
