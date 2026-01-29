import React, { useState } from 'react';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';
import styles from './index.module.scss';
import TabBar from '@/components/layout/TabBar';
import { CART_ITEMS } from '@/data/mock';

const Cart = () => {
  const [items, setItems] = useState(CART_ITEMS);

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.container}>
      <div className={styles.header}>购物车</div>

      <div className={styles.cartList}>
        {items.map(item => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.name} className={styles.image} />
            <div className={styles.info}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.price}>${item.price}</div>
            </div>
            <div className={styles.actions}>
              <FiTrash2 className={styles.deleteBtn} onClick={() => removeItem(item.id)} />
              <div className={styles.quantityControl}>
                <button onClick={() => updateQuantity(item.id, -1)}><FiMinus /></button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}><FiPlus /></button>
              </div>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <div style={{ textAlign: 'center', marginTop: 40, color: '#999' }}>
            购物车是空的
          </div>
        )}
      </div>

      <div className={styles.footer}>
        <div className={styles.totalInfo}>
          <span className={styles.label}>合计:</span>
          <span className={styles.totalPrice}>${total.toFixed(2)}</span>
        </div>
        <button className={styles.checkoutBtn}>去结算</button>
      </div>

      <TabBar />
    </div>
  );
};

export default Cart;
