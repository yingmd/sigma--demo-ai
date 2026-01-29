import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import styles from './Search.module.scss';
import TabBar from '@/components/layout/TabBar';
import { PRODUCTS } from '@/data/mock';

const RECENT_SEARCHES = ['苹果', '香蕉', '牛奶', '面包', '咖啡'];

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const filteredProducts = query 
    ? PRODUCTS.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.searchWrapper}>
          <FiSearch className={styles.searchIcon} />
          <input 
            type="text" 
            className={styles.input}
            placeholder="搜索商品..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          {query && <FiX onClick={() => setQuery('')} style={{ color: '#999' }} />}
        </div>
      </div>

      <div className={styles.content}>
        {!query ? (
          <>
            <h3 className={styles.sectionTitle}>最近搜索</h3>
            <div className={styles.tags}>
              {RECENT_SEARCHES.map((term, index) => (
                <div key={index} className={styles.tag} onClick={() => setQuery(term)}>
                  {term}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h3 className={styles.sectionTitle}>"{query}" 的搜索结果</h3>
            {filteredProducts.length > 0 ? (
              <div className={styles.results}>
                {filteredProducts.map(product => (
                  <div key={product.id} className={styles.productCard} onClick={() => navigate(`/product/${product.id}`)}>
                    <div className={styles.imageWrapper}>
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className={styles.info}>
                      <div className={styles.name}>{product.name}</div>
                      <div className={styles.price}>${product.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>未找到相关商品</div>
            )}
          </>
        )}
      </div>

      <TabBar />
    </div>
  );
};

export default Search;
