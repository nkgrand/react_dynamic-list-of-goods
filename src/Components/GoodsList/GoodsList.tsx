import React from 'react';
import './GoodsList.scss';

type Good = {
  id: number,
  name: string,
  color: string,
};

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ol className="goods__list">
    {goods.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ol>
);