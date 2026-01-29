---
name: "mobile-responsive-design"
description: "提供移动端H5响应式开发方案。当用户需要实现移动端适配、REM布局或处理触摸事件时调用。"
---

# 移动端响应式开发指南

此技能提供一套完整的移动端 H5 适配和开发方案，基于 Flexible + REM 策略。

## 核心策略

1.  **视口设置 (Viewport)**
    确保 HTML `head` 中包含正确的 meta 标签：
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    ```

2.  **REM 适配方案**
    *   **基准**：以设计稿宽度（通常为 375px 或 750px）为基准。
    *   **实现**：使用 CSS 媒体查询或 JS 动态设置 `html` 的 `font-size`。
    *   **转换**：推荐使用 PostCSS 插件（如 `postcss-pxtorem`）自动将 px 转换为 rem，或者手动计算（例如 1rem = 100px）。

3.  **布局模式**
    *   **Flexbox**: 首选布局方式，用于一维布局（行/列）。
    *   **Grid**: 用于复杂的二维布局。
    *   **Sticky**: 用于吸顶头部 (`position: sticky; top: 0`).
    *   **Fixed**: 用于底部导航栏 (`position: fixed; bottom: 0`).

4.  **交互优化**
    *   **触摸区域**：可点击元素的最小尺寸应为 44x44px。
    *   **点击反馈**：使用 `:active` 伪类提供按压效果。
    *   **滚动体验**：使用 `-webkit-overflow-scrolling: touch` 开启 iOS 惯性滚动。
    *   **安全区域**：适配 iPhone X+ 底部横条 (`padding-bottom: env(safe-area-inset-bottom)`).

## 代码片段示例

### SCSS 混合宏 (Mixins)

```scss
// 隐藏滚动条但保留滚动功能
@mixin hide-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }
}

// 文本溢出省略
@mixin text-ellipsis($lines: 1) {
  @if $lines == 1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  } @else {
    display: -webkit-box;
    -webkit-line-clamp: $lines;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
```

## 检查清单
- [ ] Meta Viewport 标签是否正确？
- [ ] 底部导航是否避开了安全区域？
- [ ] 弹窗蒙层是否阻止了背景滚动？
- [ ] 图片是否设置了 `max-width: 100%`？
