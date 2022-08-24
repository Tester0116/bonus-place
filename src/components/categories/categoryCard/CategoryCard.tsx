import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./CategoryCard.scss";
import { ISubCategory } from "../../../models/category";

interface Props {
  category: ISubCategory;
  index: number;
  Icon: React.ReactElement;
  Background: string;
}

const CategoryCard: React.FC<Props> = ({
  Background,
  Icon,
  category,
  index,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className="categoryCard"
      key={category.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={category.id === 1 ? "/" : `/categories/${category.id}`}
        className="categoryCard__row"
      >
        <svg
          className="svg__color"
          style={{
            border: isHover
              ? `2px solid ${Background}`
              : `2px solid ${Background}`,
            background: isHover ? `${Background}` : `white`,
            fill: isHover ? `white` : `${Background}`,
          }}
        >
          {Icon}
        </svg>
      </Link>
      <Link
        to={category.id === 1 ? "/" : `/categories/${category.id}`}
        className="categoryCard__title"
      >
        {category.title}
      </Link>
    </div>
  );
};

export default CategoryCard;
