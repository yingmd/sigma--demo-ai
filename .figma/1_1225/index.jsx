import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.ecommerce}>
      <div className={styles.statusBar}>
        <img src="../image/mkgy5duk-k4uucgi.svg" className={styles.time} />
        <img src="../image/mkgy5duk-fzfrahk.svg" className={styles.rightSide} />
      </div>
      <div className={styles.search2}>
        <img src="../image/mkgy5duk-20rykuh.svg" className={styles.search} />
        <p className={styles.label}>Search</p>
      </div>
      <div className={styles.pills}>
        <div className={styles.iconLabel}>
          <img
            src="../image/mkgy5duk-433yy28.svg"
            className={styles.iconFavorite}
          />
          <p className={styles.label2}>Favorites</p>
        </div>
        <div className={styles.iconLabel2}>
          <img
            src="../image/mkgy5duk-dd7p3q7.svg"
            className={styles.iconFavorite}
          />
          <p className={styles.label3}>History</p>
        </div>
        <div className={styles.iconLabel2}>
          <img
            src="../image/mkgy5duk-jj9mv1z.svg"
            className={styles.iconFavorite}
          />
          <p className={styles.label3}>Following</p>
        </div>
        <div className={styles.iconLabel2}>
          <img
            src="../image/mkgy5duk-c0rn3ww.svg"
            className={styles.iconFavorite}
          />
          <p className={styles.label3}>Orders</p>
        </div>
      </div>
      <div className={styles.banner}>
        <p className={styles.bannerTitle}>Banner title</p>
        <div className={styles.pagination}>
          <div className={styles.selected} />
          <div className={styles.default} />
          <div className={styles.default} />
          <div className={styles.default} />
          <div className={styles.default} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.title2}>
          <p className={styles.title}>Title</p>
          <div className={styles.container}>
            <img
              src="../image/mkgy5duj-b12l4l5.svg"
              className={styles.iconChevron}
            />
          </div>
        </div>
        <div className={styles.carousel}>
          <div className={styles.item}>
            <img src="../image/mkgy5dup-fv5zvj9.png" className={styles.image} />
            <p className={styles.title3}>Title</p>
          </div>
          <div className={styles.item}>
            <img src="../image/mkgy5dup-si4mrh2.png" className={styles.image} />
            <p className={styles.title3}>Title</p>
          </div>
          <div className={styles.item}>
            <img src="../image/mkgy5dup-c96cnyn.png" className={styles.image} />
            <p className={styles.title3}>Title</p>
          </div>
          <div className={styles.item}>
            <img src="../image/mkgy5dup-5ghu429.png" className={styles.image} />
            <p className={styles.title3}>Title</p>
          </div>
        </div>
      </div>
      <div className={styles.autoWrapper}>
        <div className={styles.row2}>
          <div className={styles.title2}>
            <p className={styles.title}>Title</p>
            <div className={styles.container}>
              <img
                src="../image/mkgy5duj-b12l4l5.svg"
                className={styles.iconChevron}
              />
            </div>
          </div>
          <div className={styles.carousel2}>
            <div className={styles.card}>
              <img src="../image/mkgy5dup-l4pjo8j.png" className={styles.image2} />
              <div className={styles.info}>
                <p className={styles.brand}>Brand&nbsp;</p>
                <p className={styles.productName}>Product name</p>
                <p className={styles.a1099}>$10.99</p>
              </div>
            </div>
            <div className={styles.card}>
              <img src="../image/mkgy5dup-y87oe6v.png" className={styles.image2} />
              <div className={styles.info}>
                <p className={styles.brand}>Brand&nbsp;</p>
                <p className={styles.productName}>Product name</p>
                <p className={styles.a1099}>$10.99</p>
              </div>
            </div>
            <div className={styles.card}>
              <img src="../image/mkgy5duq-4pgtgh9.png" className={styles.image2} />
              <div className={styles.info}>
                <p className={styles.brand}>Brand&nbsp;</p>
                <p className={styles.productName}>Product name</p>
                <p className={styles.a1099}>$10.99</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.carousel3}>
          <img src="../image/mkgy5duq-g2axmp0.png" className={styles.image3} />
          <img src="../image/mkgy5duq-1cqs1yr.png" className={styles.image3} />
          <img src="../image/mkgy5duq-jbien6e.png" className={styles.image3} />
          <img src="../image/mkgy5duq-94pmca7.png" className={styles.image3} />
        </div>
        <div className={styles.tabBar}>
          <div className={styles.tabs}>
            <div className={styles.tabBarItem}>
              <img src="../image/mkgy5duk-26e74dm.svg" className={styles.search} />
            </div>
            <div className={styles.tabBarItem2}>
              <img src="../image/mkgy5duk-ak9gool.svg" className={styles.search} />
            </div>
            <div className={styles.tabBarItem3}>
              <img src="../image/mkgy5duk-88yyr6h.svg" className={styles.search} />
            </div>
            <div className={styles.tabBarItem4}>
              <img src="../image/mkgy5duk-e2ulpti.svg" className={styles.search} />
            </div>
            <div className={styles.tabBarItem5}>
              <img src="../image/mkgy5duk-dmfeafn.svg" className={styles.search} />
            </div>
          </div>
          <div className={styles.homeIndicator2}>
            <div className={styles.homeIndicator} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
