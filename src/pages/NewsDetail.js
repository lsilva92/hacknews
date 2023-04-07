import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NewsContext } from '../context/newsContext';
import NewsDetailComponent from '../components/pages/NewsDetailComponent';

export default function NewsDetail() {
  const { news, setNews } = useContext(NewsContext);
  const { id } = useParams();

  useEffect(() => {
    const filteredNews = news.filter((el) => el.id === id);
    setNews(filteredNews);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <NewsDetailComponent news={news} />;
}
