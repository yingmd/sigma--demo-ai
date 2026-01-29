import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import styles from './Category.module.scss';
import { PRODUCTS, CATEGORIES } from '@/data/mock';

const Category = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const category = CATEGORIES.find(c => c.id === Number(id));
  const categoryProducts = PRODUCTS.filter(p => p.categoryId === Number(id)); // Assuming mock data has categoryId, I need to check if I added it.

  // In my previous mock data creation, I added categoryId to some products but not all explicitly. 
  // Let's filter loosely or just show all for demo if categoryId is missing.
  // Actually, I did add categoryId to products in mock.ts.

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FiArrowLeft className={styles.backBtn} onClick={() => navigate(-1)} />
        <div className={styles.title}>{category ? category.title : '分类'}</div>
      </div>

      <div className={styles.content}>
        {categoryProducts.length > 0 ? (
          <div className={styles.productList}>
            {categoryProducts.map(product => (
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
          <div className={styles.emptyState}>
            该分类下暂无商品
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
