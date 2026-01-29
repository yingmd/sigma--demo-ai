import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiSearch, 
  FiHeart, 
  FiClock, 
  FiUserCheck, 
  FiPackage, 
  FiChevronRight 
} from 'react-icons/fi';
import styles from './Home.module.scss';
import { cn } from '@/lib/utils';
import { CATEGORIES, PRODUCTS } from '@/data/mock';
import TabBar from '@/components/layout/TabBar';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.ecommerce}>
      {/* Search Bar - Sticky Header */}
      <div className={styles.header}>
        <div className={styles.searchBar} onClick={() => navigate('/search')}>
          <FiSearch className={styles.searchIcon} />
          <span className={styles.placeholder}>搜索商品...</span>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className={styles.scrollContent}>
        {/* Quick Actions */}
        <div className={styles.quickActions}>
          <div className={styles.actionItem} onClick={() => navigate('/favorites')}>
            <FiHeart className={styles.actionIcon} />
            <span>收藏</span>
          </div>
          <div className={styles.actionItem} onClick={() => navigate('/history')}>
            <FiClock className={styles.actionIcon} />
            <span>历史</span>
          </div>
          <div className={styles.actionItem} onClick={() => navigate('/following')}>
            <FiUserCheck className={styles.actionIcon} />
            <span>关注</span>
          </div>
          <div className={styles.actionItem} onClick={() => navigate('/quick-orders')}>
            <FiPackage className={styles.actionIcon} />
            <span>订单</span>
          </div>
        </div>

        {/* Banner */}
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <h2 className={styles.bannerTitle}>夏季新鲜特惠</h2>
            <p className={styles.bannerSubtitle}>最高5折优惠</p>
          </div>
          <div className={styles.pagination}>
            <div className={cn(styles.dot, styles.active)} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </div>
        </div>

        {/* Categories */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.title}>分类</h3>
            <FiChevronRight className={styles.chevron} />
          </div>
          <div className={styles.categoryList}>
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className={styles.categoryItem} onClick={() => navigate(`/category/${cat.id}`)}>
                <div className={styles.imageWrapper}>
                  {/* Using placeholder if image fails, in real app handle onError */}
                  <img src={cat.image} alt={cat.title} className={styles.image} />
                </div>
                <span className={styles.catTitle}>{cat.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Products */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.title}>热门优惠</h3>
            <FiChevronRight className={styles.chevron} />
          </div>
          <div className={styles.productList}>
            {PRODUCTS.map((product) => (
              <div key={product.id} className={styles.productCard} onClick={() => navigate(`/product/${product.id}`)}>
                <div className={styles.productImageWrapper}>
                  <img src={product.image} alt={product.name} className={styles.productImage} />
                </div>
                <div className={styles.productInfo}>
                  <span className={styles.brand}>{product.brand}</span>
                  <h4 className={styles.productName}>{product.name}</h4>
                  <span className={styles.price}>${product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom spacer for TabBar */}
        <div className={styles.bottomSpacer} />
      </div>

      {/* Bottom Navigation - Fixed Footer */}
      <TabBar />
    </div>
  );
}

export default Home;
