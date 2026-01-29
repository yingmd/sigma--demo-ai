---
name: "react-component-architect"
description: "生成标准化的 React 组件结构。当用户需要创建新组件、设计组件架构或重构组件时调用。"
---

# React 组件架构师

此技能用于生成符合最佳实践的 React 组件结构，强调模块化、可维护性和类型安全。

## 组件目录结构

每个业务组件应作为一个独立的目录存在：

```
src/components/YourComponent/
├── index.tsx          # 组件逻辑与视图
├── index.module.scss  # 组件私有样式
└── types.ts           # (可选) 类型定义
```

## 标准组件模板 (Template)

### 1. index.tsx

```tsx
import React from 'react';
import { cn } from '@/lib/utils';
import styles from './index.module.scss';

// 定义 Props 接口
interface YourComponentProps {
  className?: string;
  title: string;
  // 其他 props...
}

export const YourComponent: React.FC<YourComponentProps> = ({ 
  className, 
  title 
}) => {
  return (
    <div className={cn(styles.container, className)}>
      <h2 className={styles.title}>{title}</h2>
      {/* 组件内容 */}
    </div>
  );
};
```

### 2. index.module.scss

```scss
@use '@/styles/variables' as *;

.container {
  display: flex;
  flex-direction: column;
  // 基础样式
}

.title {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
}
```

## 设计原则

1.  **样式隔离**：强制使用 CSS Modules (`*.module.scss`) 防止样式污染。
2.  **样式合并**：使用 `cn()` (clsx + tailwind-merge) 处理 `className` 传递。
3.  **职责单一**：如果组件超过 200 行，考虑拆分为子组件。
4.  **Props 显式定义**：始终使用 TypeScript 接口定义 Props。
5.  **相对路径引用**：组件内部引用样式使用 `./`，引用全局资源使用 `@/`。

## 常见模式

*   **容器/展示分离**：对于复杂页面，将数据获取逻辑放在 `Page` 组件，将 UI 渲染放在 `Component`。
*   **组合式组件**：使用 `Compound Components` 模式处理紧密耦合的父子组件（如 Tabs, Accordion）。
