import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiBell, FiPackage, FiTag, FiMessageCircle } from 'react-icons/fi';
import styles from './index.module.scss';
import TabBar from '@/components/layout/TabBar';

const NOTIFICATIONS = [
  {
    id: 1,
    type: 'order',
    icon: <FiPackage />,
    title: '订单已发货',
    content: '您的订单 #12345 已发货，预计3天内送达',
    time: '10分钟前',
    unread: true,
  },
  {
    id: 2,
    type: 'promo',
    icon: <FiTag />,
    title: '限时优惠',
    content: '夏季水果专场，全场8折起，快来选购吧！',
    time: '2小时前',
    unread: true,
  },
  {
    id: 3,
    type: 'system',
    icon: <FiBell />,
    title: '系统通知',
    content: '您的账户安全设置已更新',
    time: '昨天',
    unread: false,
  },
  {
    id: 4,
    type: 'message',
    icon: <FiMessageCircle />,
    title: '客服回复',
    content: '您咨询的商品已有货，可以下单购买啦',
    time: '2天前',
    unread: false,
  },
];

const Notifications = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FiArrowLeft className={styles.backBtn} onClick={() => navigate(-1)} />
        <div className={styles.title}>消息中心</div>
        <div className={styles.rightPlaceholder}></div>
      </div>

      <div className={styles.content}>
        {NOTIFICATIONS.length > 0 ? (
          <div className={styles.notificationList}>
            {NOTIFICATIONS.map((item) => (
              <div
                key={item.id}
                className={`${styles.notificationItem} ${item.unread ? styles.unread : ''}`}
              >
                <div className={styles.iconWrapper}>{item.icon}</div>
                <div className={styles.info}>
                  <div className={styles.topRow}>
                    <span className={styles.notificationTitle}>{item.title}</span>
                    <span className={styles.time}>{item.time}</span>
                  </div>
                  <p className={styles.notificationContent}>{item.content}</p>
                </div>
                {item.unread && <div className={styles.unreadDot}></div>}
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <FiBell className={styles.emptyIcon} />
            <p>暂无消息</p>
          </div>
        )}
      </div>

      <TabBar />
    </div>
  );
};

export default Notifications;
