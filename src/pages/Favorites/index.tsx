import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiHeart, FiTrash2 } from 'react-icons/fi';
import styles from './index.module.scss';
import TabBar from '@/components/layout/TabBar';

const FAVORITES = [
  {
    id: 1,
    name: '新鲜梨子',
    brand: '有机农场',
    price: 10.99,
    image: '/images/mkgy5dup-l4pjo8j.png',
  },
  {
    id: 2,
    name: '西瓜',
    brand: '本地优选',
    price: 5.99,
    image: '/images/mkgy5dup-y87oe6v.png',
  },
  {
    id: 3,
    name: '三文鱼排',
    brand: '海鲜世家',
    price: 25.99,
    image: '/images/mkgy5dup-5ghu429.png',
  },
];

const Favorites = () => {
  const navigate = useNavigate();

  const handleRemove = (id: number) => {
    alert('已取消收藏');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FiArrowLeft className={styles.backBtn} onClick={() => navigate(-1)} />
        <div className={styles.title}>我的收藏</div>
        <div className={styles.rightPlaceholder}></div>
      </div>

      <div className={styles.content}>
        {FAVORITES.length > 0 ? (
          <div className={styles.favoriteList}>
            {FAVORITES.map((item) => (
              <div key={item.id} className={styles.favoriteItem} onClick={() => navigate(`/product/${item.id}`)}>
                <img src={item.image} alt={item.name} className={styles.image} />
                <div className={styles.info}>
                  <div className={styles.brand}>{item.brand}</div>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.price}>${item.price}</div>
                </div>
                <div className={styles.actions}>
                  <button 
                    className={styles.removeBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(item.id);
                    }}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <FiHeart className={styles.emptyIcon} />
            <p>暂无收藏商品</p>
            <button className={styles.browseBtn} onClick={() => navigate('/')}>去逛逛</button>
          </div>
        )}
      </div>

      <TabBar />
    </div>
  );
};

export default Favorites;
