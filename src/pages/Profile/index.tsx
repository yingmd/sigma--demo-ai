import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiPackage, FiSettings, FiHelpCircle, FiChevronRight, FiLogOut } from 'react-icons/fi';
import styles from './index.module.scss';
import TabBar from '@/components/layout/TabBar';
import { USER_PROFILE } from '@/data/mock';

const Profile = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <FiPackage />, label: '我的订单', path: '/orders' },
    { icon: <FiUser />, label: '编辑资料', path: '/edit-profile' },
    { icon: <FiSettings />, label: '设置', path: '/settings' },
    { icon: <FiHelpCircle />, label: '帮助与客服', path: '#' },
    { icon: <FiLogOut />, label: '退出登录', color: '#ff4d4f', action: () => {
      if (confirm('确定要退出登录吗？')) {
        alert('已退出登录');
        navigate('/');
      }
    }},
  ];

  const handleMenuClick = (item: typeof menuItems[0]) => {
    if (item.action) {
      item.action();
    } else if (item.path && item.path !== '#') {
      navigate(item.path);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <FiUser />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{USER_PROFILE.name}</div>
          <div className={styles.email}>{USER_PROFILE.email}</div>
        </div>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.value}>{USER_PROFILE.orders}</span>
            <span className={styles.label}>订单</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.value}>{USER_PROFILE.following}</span>
            <span className={styles.label}>关注</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.value}>{USER_PROFILE.vouchers}</span>
            <span className={styles.label}>优惠券</span>
          </div>
        </div>
      </div>

      <div className={styles.menu}>
        {menuItems.map((item, index) => (
          <div key={index} className={styles.menuItem} onClick={() => handleMenuClick(item)}>
            <div className={styles.left} style={{ color: item.color }}>
              <span className={styles.icon} style={{ color: item.color }}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
            <div className={styles.right}>
              <FiChevronRight />
            </div>
          </div>
        ))}
      </div>

      <TabBar />
    </div>
  );
};

export default Profile;
