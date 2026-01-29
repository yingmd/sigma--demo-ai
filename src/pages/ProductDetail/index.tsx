import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiShare2, FiStar } from 'react-icons/fi';
import styles from './index.module.scss';
import { PRODUCTS } from '@/data/mock';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<typeof PRODUCTS[0] | null>(null);

  useEffect(() => {
    if (id) {
      const found = PRODUCTS.find(p => p.id === Number(id));
      if (found) {
        setProduct(found);
      }
    }
  }, [id]);

  if (!product) {
    return <div className="p-4">加载中...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.iconBtn} onClick={() => navigate(-1)}>
          <FiArrowLeft />
        </div>
        <div className={styles.iconBtn}>
          <FiShare2 />
        </div>
      </div>

      <div className={styles.imageSection}>
        <img src={product.image} alt={product.name} />
      </div>

      <div className={styles.infoSection}>
        <div className={styles.brand}>{product.brand}</div>
        <div className={styles.titleRow}>
          <h1>{product.name}</h1>
          <div className={styles.price}>${product.price}</div>
        </div>

        <div className={styles.rating}>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <FiStar key={star} fill={star <= Math.round(product.rating || 0) ? "currentColor" : "none"} />
            ))}
          </div>
          <span>{product.rating} ({product.reviews || 0} 条评价)</span>
        </div>

        <div className={styles.description}>
          <h3>商品描述</h3>
          <p>{product.description || '暂无商品描述'}</p>
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.cartBtn}>加入购物车</button>
        <button className={styles.buyBtn}>立即购买</button>
      </div>
    </div>
  );
};

export default ProductDetail;
