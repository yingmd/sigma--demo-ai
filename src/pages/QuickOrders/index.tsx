import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiPackage, FiTruck, FiCheckCircle, FiClock } from 'react-icons/fi';
import styles from './index.module.scss';
import TabBar from '@/components/layout/TabBar';

const QUICK_ORDERS = [
  {
    id: '12345',
    status: 'delivered',
    statusText: '已送达',
    icon: <FiCheckCircle />,
    items: [
      { name: '新鲜梨子', image: '/images/mkgy5dup-l4pjo8j.png', quantity: 2, price: 10.99 },
    ],
    total: 21.98,
    date: '2024-01-15',
  },
  {
    id: '12344',
    status: 'shipping',
    statusText: '配送中',
    icon: <FiTruck />,
    items: [
      { name: '西瓜', image: '/images/mkgy5dup-y87oe6v.png', quantity: 1, price: 5.99 },
    ],
    total: 5.99,
    date: '2024-01-14',
  },
];

const QuickOrders = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FiArrowLeft className={styles.backBtn} onClick={() => navigate(-1)} />
        <div className={styles.title}>我的订单</div>
        <div className={styles.rightPlaceholder}></div>
      </div>

      <div className={styles.content}>
        {QUICK_ORDERS.length > 0 ? (
          <div className={styles.orderList}>
            {QUICK_ORDERS.map((order) => (
              <div key={order.id} className={styles.orderCard}>
                <div className={styles.orderHeader}>
                  <span className={styles.orderNo}>订单号: {order.id}</span>
                  <span className={`${styles.status} ${styles[order.status]}`}>
                    {order.icon}
                    {order.statusText}
                  </span>
                </div>
                <div className={styles.items}>
                  {order.items.map((item, index) => (
                    <div key={index} className={styles.item}>
                      <img src={item.image} alt={item.name} className={styles.itemImage} />
                      <div className={styles.itemInfo}>
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.itemQuantity}>x{item.quantity}</span>
                      </div>
                      <span className={styles.itemPrice}>${item.price}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.orderFooter}>
                  <span className={styles.date}>{order.date}</span>
                  <span className={styles.total}>
                    共{order.items.reduce((sum, item) => sum + item.quantity, 0)}件商品 合计: 
                    <strong>${order.total.toFixed(2)}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <FiPackage className={styles.emptyIcon} />
            <p>暂无订单</p>
            <button className={styles.browseBtn} onClick={() => navigate('/')}>去逛逛</button>
          </div>
        )}
      </div>

      <TabBar />
    </div>
  );
};

export default QuickOrders;
