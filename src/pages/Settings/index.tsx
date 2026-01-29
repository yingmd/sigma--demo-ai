import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiChevronRight, FiBell, FiLock, FiHelpCircle, FiInfo, FiTrash2 } from 'react-icons/fi';
import styles from './index.module.scss';
import TabBar from '@/components/layout/TabBar';

const SETTINGS_MENU = [
  {
    section: '通用',
    items: [
      { icon: <FiBell />, label: '消息通知', action: () => alert('消息通知设置') },
      { icon: <FiLock />, label: '账号与安全', action: () => alert('账号安全设置') },
    ],
  },
  {
    section: '其他',
    items: [
      { icon: <FiHelpCircle />, label: '帮助与反馈', action: () => alert('帮助与反馈') },
      { icon: <FiInfo />, label: '关于我们', action: () => alert('关于我们') },
    ],
  },
];

const Settings = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (confirm('确定要退出登录吗？')) {
      alert('已退出登录');
      navigate('/');
    }
  };

  const handleClearCache = () => {
    if (confirm('确定要清除缓存吗？')) {
      alert('缓存已清除');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FiArrowLeft className={styles.backBtn} onClick={() => navigate(-1)} />
        <div className={styles.title}>设置</div>
        <div className={styles.rightPlaceholder}></div>
      </div>

      <div className={styles.content}>
        {SETTINGS_MENU.map((section, index) => (
          <div key={index} className={styles.section}>
            <div className={styles.sectionTitle}>{section.section}</div>
            <div className={styles.menuList}>
              {section.items.map((item, idx) => (
                <div key={idx} className={styles.menuItem} onClick={item.action}>
                  <div className={styles.left}>
                    <span className={styles.icon}>{item.icon}</span>
                    <span className={styles.label}>{item.label}</span>
                  </div>
                  <div className={styles.right}>
                    <FiChevronRight />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.section}>
          <div className={styles.menuList}>
            <div className={styles.menuItem} onClick={handleClearCache}>
              <div className={styles.left}>
                <span className={styles.icon}><FiTrash2 /></span>
                <span className={styles.label}>清除缓存</span>
              </div>
              <div className={styles.right}>
                <span className={styles.extra}>12.5MB</span>
                <FiChevronRight />
              </div>
            </div>
          </div>
        </div>

        <button className={styles.logoutBtn} onClick={handleLogout}>
          退出登录
        </button>

        <div className={styles.version}>
          版本号 v1.0.0
        </div>
      </div>

      <TabBar />
    </div>
  );
};

export default Settings;
