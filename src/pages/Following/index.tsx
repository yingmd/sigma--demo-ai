import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiUserCheck, FiHeart, FiChevronRight } from 'react-icons/fi';
import styles from './index.module.scss';
import TabBar from '@/components/layout/TabBar';

const FOLLOWING_SHOPS = [
  {
    id: 1,
    name: '有机农场旗舰店',
    avatar: '/images/mkgy5dup-l4pjo8j.png',
    products: 128,
    followers: '1.2万',
    isFollowing: true,
  },
  {
    id: 2,
    name: '海鲜世家',
    avatar: '/images/mkgy5dup-5ghu429.png',
    products: 86,
    followers: '8千',
    isFollowing: true,
  },
  {
    id: 3,
    name: '本地优选',
    avatar: '/images/mkgy5dup-y87oe6v.png',
    products: 256,
    followers: '2.5万',
    isFollowing: true,
  },
  {
    id: 4,
    name: '烘焙工坊',
    avatar: '/images/mkgy5dup-fv5zvj9.png',
    products: 45,
    followers: '5千',
    isFollowing: true,
  },
];

const Following = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FiArrowLeft className={styles.backBtn} onClick={() => navigate(-1)} />
        <div className={styles.title}>我的关注</div>
        <div className={styles.rightPlaceholder}></div>
      </div>

      <div className={styles.content}>
        {FOLLOWING_SHOPS.length > 0 ? (
          <div className={styles.shopList}>
            {FOLLOWING_SHOPS.map((shop) => (
              <div key={shop.id} className={styles.shopItem}>
                <img src={shop.avatar} alt={shop.name} className={styles.avatar} />
                <div className={styles.info}>
                  <div className={styles.name}>{shop.name}</div>
                  <div className={styles.stats}>
                    <span>商品 {shop.products}</span>
                    <span>粉丝 {shop.followers}</span>
                  </div>
                </div>
                <div className={styles.actions}>
                  <button className={styles.enterBtn}>
                    进店 <FiChevronRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <FiUserCheck className={styles.emptyIcon} />
            <p>暂无关注商家</p>
            <button className={styles.browseBtn} onClick={() => navigate('/')}>去发现</button>
          </div>
        )}
      </div>

      <TabBar />
    </div>
  );
};

export default Following;
