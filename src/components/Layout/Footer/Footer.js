import React, { useState, useContext } from 'react';
import { NewsContext } from '../../../context/newsContext';
import RadioButtonGroup from '../../common/RadioButtonGroup';
import Button from 'react-bootstrap/Button';

export default function Footer() {
  const { language, setLanguage, bookMark, cachedNews, setNews } =
    useContext(NewsContext);
  const [radioValue, setRadioValue] = useState(language);
  const radios = [
    { name: 'EN', value: 'en' },
    { name: 'PT', value: 'pt' },
  ];

  function handleChange(e) {
    setRadioValue(e.currentTarget.value);
    setLanguage(e.currentTarget.value);
  }

  function showBookmarkedNews() {
    const bookNews = [];

    cachedNews.forEach((el) => {
      if (bookMark.includes(el.id)) {
        bookNews.push(el);
      }
    });
    setNews(bookNews);
  }

  return (
    <div className="Footer" data-testid="footer">
      <div className="Footer__btn m-2">
        <RadioButtonGroup
          radios={radios}
          handleChange={handleChange}
          radioValue={radioValue}
        />
        <Button variant="secondary" onClick={() => showBookmarkedNews()}>
          Bookmarks
        </Button>
      </div>
    </div>
  );
}
