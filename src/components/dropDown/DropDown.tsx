import React, { FC, useState } from "react";
import "./dropDown.scss";

interface DropDownProps {
  setSortType: (value: string) => void;
}
const DropDown: FC<DropDownProps> = ({ setSortType }) => {
  const items = [
    { title: "По алфавиту", type: "-created_at" },
    { title: "По цене (низкая > высокая)", type: "price" },
    { title: "По цене (высокая > низкая)", type: "-price" },
  ];

  const [dropDown, setDropDown] = useState(false);
  const [activeSort, setActiveSort] = useState(0);

  const handleActive = (index: number) => {
    setDropDown(false);
    setActiveSort(index);
    setSortType(items[activeSort].type);
  };

  return (
    <div className="dropDown">
      <button onClick={() => setDropDown(true)}>Сортировать по ▾</button>
      {dropDown && (
        <>
          <ul className="ul__dropDown">
            <li>
              <button onClick={() => setDropDown(false)}>
                Сортировать по ▾
              </button>
            </li>
            {items.map((item, index) => (
              <li
                className={activeSort === index ? "active " : ""}
                onClick={() => {
                  handleActive(index);
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default DropDown;
