import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCamera, FiChevronRight } from 'react-icons/fi';
import styles from './index.module.scss';
import TabBar from '@/components/layout/TabBar';
import { USER_PROFILE } from '@/data/mock';

const EditProfile = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: USER_PROFILE.name,
    email: USER_PROFILE.email,
    phone: '13800138000',
    gender: '男',
    birthday: '1990-01-01',
  });

  const handleSave = () => {
    // 保存逻辑
    alert('保存成功！');
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FiArrowLeft className={styles.backBtn} onClick={() => navigate(-1)} />
        <div className={styles.title}>编辑资料</div>
        <span className={styles.saveBtn} onClick={handleSave}>保存</span>
      </div>

      <div className={styles.content}>
        <div className={styles.avatarSection}>
          <div className={styles.avatar}>
            <img src={USER_PROFILE.avatar} alt="avatar" />
            <div className={styles.cameraIcon}>
              <FiCamera />
            </div>
          </div>
          <p className={styles.tip}>点击更换头像</p>
        </div>

        <div className={styles.form}>
          <div className={styles.formItem}>
            <label>昵称</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="请输入昵称"
            />
          </div>

          <div className={styles.formItem}>
            <label>邮箱</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="请输入邮箱"
            />
          </div>

          <div className={styles.formItem}>
            <label>手机号</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="请输入手机号"
            />
          </div>

          <div className={styles.formItem} onClick={() => alert('选择性别')}>
            <label>性别</label>
            <div className={styles.value}>
              {form.gender}
              <FiChevronRight />
            </div>
          </div>

          <div className={styles.formItem} onClick={() => alert('选择生日')}>
            <label>生日</label>
            <div className={styles.value}>
              {form.birthday}
              <FiChevronRight />
            </div>
          </div>
        </div>
      </div>

      <TabBar />
    </div>
  );
};

export default EditProfile;
