import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const [news, setNews] = useState([]);
  const [cachedNews, setCachedNews] = useState([]);
  const [language, setLanguage] = useState('en');
  const [bookMark, setBookMark] = useState([]);

  return (
    <NewsContext.Provider
      value={{
        news,
        setNews,
        cachedNews,
        setCachedNews,
        language,
        setLanguage,
        bookMark,
        setBookMark,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};
