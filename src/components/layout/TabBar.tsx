import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiCompass, 
  FiShoppingCart, 
  FiBell, 
  FiUser 
} from 'react-icons/fi';
import { cn } from '@/lib/utils';
import styles from './TabBar.module.scss';

const TabBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <div className={styles.tabBar}>
      <div 
        className={cn(styles.tabItem, isActive('/') && styles.active)} 
        onClick={() => navigate('/')}
      >
        <FiHome className={styles.tabIcon} />
        <span className={styles.tabLabel}>首页</span>
      </div>
      <div
        className={cn(styles.tabItem, isActive('/search') && styles.active)}
        onClick={() => navigate('/search')}
      >
        <FiCompass className={styles.tabIcon} />
        <span className={styles.tabLabel}>发现</span>
      </div>
      <div
        className={cn(styles.tabItem, isActive('/cart') && styles.active)}
        onClick={() => navigate('/cart')}
      >
        <FiShoppingCart className={styles.tabIcon} />
        <span className={styles.tabLabel}>购物车</span>
      </div>
      <div
        className={cn(styles.tabItem, isActive('/notifications') && styles.active)}
        onClick={() => navigate('/notifications')}
      >
        <FiBell className={styles.tabIcon} />
        <span className={styles.tabLabel}>消息</span>
      </div>
      <div
        className={cn(styles.tabItem, isActive('/profile') && styles.active)}
        onClick={() => navigate('/profile')}
      >
        <FiUser className={styles.tabIcon} />
        <span className={styles.tabLabel}>我的</span>
      </div>
    </div>
  );
};

export default TabBar;
