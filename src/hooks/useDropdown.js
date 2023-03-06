const useDropdown = () => {
  const calculatePosition = (itemOrder, itemHeight, padding) => {
    const position = itemOrder * (itemHeight + padding * 2);
    return position;
  };

  return { calculatePosition };
};

export default useDropdown;
