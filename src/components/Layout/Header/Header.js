import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../../../context/categoriesContext';
import { NewsContext } from '../../../context/newsContext';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

export default function Header() {
  const [value, setValue] = useState([]);
  const [categories] = useContext(CategoriesContext);
  const { setNews, cachedNews } = useContext(NewsContext);

  function handleChange(e) {
    setValue(e.target.value);

    const filteredNews = cachedNews.filter((el) =>
      el.category.includes(e.target.value)
    );
    setNews(filteredNews);
  }

  return (
    <div className="Header" data-testid="header">
      <ToggleButtonGroup
        type="checkbox"
        value={value}
        className="header__categories mb-2"
      >
        {categories.map((categorie) => {
          return (
            <ToggleButton
              variant="secondary"
              id={`btn_${categorie}`}
              key={`btn_${categorie}`}
              value={categorie}
              onChange={(e) => handleChange(e)}
            >
              {categorie}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </div>
  );
}
