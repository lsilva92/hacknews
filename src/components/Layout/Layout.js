import React, { useState } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { CategoriesProvider } from '../../context/categoriesContext';

export default function Layout(props) {
  const [categories, setCategories] = useState([]);

  return (
    <div data-testid="layout">
      <CategoriesProvider value={[categories, setCategories]}>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </CategoriesProvider>
    </div>
  );
}
