import React, { useEffect, useContext, useState } from 'react';
import { getArchive } from '../services/api';
import NewsListComponent from '../components/pages/NewsListComponent';
import { NewsContext } from '../context/newsContext';

export default function Home() {
  const { news, setNews, setCachedNews, language } = useContext(NewsContext);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    getArchive(language).then((res) => {
      setNews(res.news);
      setCachedNews(res.news);
      setIsloading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  if (isLoading)
    return (
      <>
        <h3>Loading...</h3>
      </>
    );

  return <NewsListComponent news={news} data-testid="news" />;
}
