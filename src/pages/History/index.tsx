import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiClock, FiTrash2 } from 'react-icons/fi';
import styles from './index.module.scss';
import TabBar from '@/components/layout/TabBar';

const HISTORY = [
  {
    id: 1,
    name: '新鲜梨子',
    brand: '有机农场',
    price: 10.99,
    image: '/images/mkgy5dup-l4pjo8j.png',
    viewedAt: '今天 10:23',
  },
  {
    id: 2,
    name: '西瓜',
    brand: '本地优选',
    price: 5.99,
    image: '/images/mkgy5dup-y87oe6v.png',
    viewedAt: '今天 09:15',
  },
  {
    id: 3,
    name: '新鲜蘑菇',
    brand: '农家直供',
    price: 8.49,
    image: '/images/mkgy5duq-4pgtgh9.png',
    viewedAt: '昨天 18:30',
  },
  {
    id: 4,
    name: '车厘子',
    brand: '进口优选',
    price: 15.99,
    image: '/images/mkgy5dup-l4pjo8j.png',
    viewedAt: '昨天 14:20',
  },
];

const History = () => {
  const navigate = useNavigate();

  const handleClear = () => {
    if (confirm('确定要清空浏览历史吗？')) {
      alert('已清空浏览历史');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FiArrowLeft className={styles.backBtn} onClick={() => navigate(-1)} />
        <div className={styles.title}>浏览历史</div>
        <span className={styles.clearBtn} onClick={handleClear}>清空</span>
      </div>

      <div className={styles.content}>
        {HISTORY.length > 0 ? (
          <div className={styles.historyList}>
            {HISTORY.map((item) => (
              <div key={item.id} className={styles.historyItem} onClick={() => navigate(`/product/${item.id}`)}>
                <img src={item.image} alt={item.name} className={styles.image} />
                <div className={styles.info}>
                  <div className={styles.brand}>{item.brand}</div>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.bottomRow}>
                    <span className={styles.price}>${item.price}</span>
                    <span className={styles.time}>{item.viewedAt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <FiClock className={styles.emptyIcon} />
            <p>暂无浏览历史</p>
            <button className={styles.browseBtn} onClick={() => navigate('/')}>去逛逛</button>
          </div>
        )}
      </div>

      <TabBar />
    </div>
  );
};

export default History;
