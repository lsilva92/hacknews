import React, { createContext, useState, useEffect } from 'react';
import { getCategories } from '../services/api';

export const CategoriesContext = createContext();

export const CategoriesProvider = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.categories);
    });
  }, []);

  return (
    <CategoriesContext.Provider value={[categories, setCategories]}>
      {props.children}
    </CategoriesContext.Provider>
  );
};
