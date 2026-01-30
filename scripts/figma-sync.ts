// Figma API 同步脚本
// 用于从 Figma 获取设计数据并同步到项目

const FIGMA_CLIENT_ID = 'VSdxoEdexHmhgLGE5fS10l';
const FIGMA_CLIENT_SECRET = 'IyEPLQKI2Yds3NtYkY8JB1DWMkiSpy';
const FIGMA_FILE_ID = '4zcUaFCZyGuKvZim4Q5J4u';

// Figma API 基础 URL
const FIGMA_API_BASE = 'https://api.figma.com/v1';

interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  fills?: any[];
  strokes?: any[];
  effects?: any[];
  style?: {
    fontFamily?: string;
    fontPostScriptName?: string;
    fontWeight?: number;
    fontSize?: number;
    lineHeightPx?: number;
    letterSpacing?: number;
    fills?: any[];
  };
  absoluteBoundingBox?: {
    width: number;
    height: number;
    x: number;
    y: number;
  };
}

interface FigmaFile {
  document: FigmaNode;
  components: Record<string, any>;
  schemaVersion: number;
  styles: Record<string, any>;
}

// 获取 Figma 文件数据
async function getFigmaFile(accessToken: string, fileId: string): Promise<FigmaFile> {
  const response = await fetch(`${FIGMA_API_BASE}/files/${fileId}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'X-Figma-Token': accessToken,
    },
  });

  if (!response.ok) {
    throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// 获取 Figma 图片资源
async function getFigmaImages(
  accessToken: string,
  fileId: string,
  nodeIds: string[]
): Promise<Record<string, string>> {
  const ids = nodeIds.join(',');
  const response = await fetch(
    `${FIGMA_API_BASE}/images/${fileId}?ids=${ids}&format=png&scale=2`,
    {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'X-Figma-Token': accessToken,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Figma Images API error: ${response.status}`);
  }

  const data = await response.json();
  return data.images;
}

// 提取颜色变量
function extractColors(node: FigmaNode): Map<string, string> {
  const colors = new Map<string, string>();

  function traverse(n: FigmaNode, path: string = '') {
    const currentPath = path ? `${path}/${n.name}` : n.name;

    // 提取填充颜色
    if (n.fills && n.fills.length > 0) {
      n.fills.forEach((fill, index) => {
        if (fill.type === 'SOLID' && fill.color) {
          const { r, g, b, a = 1 } = fill.color;
          const hex = rgbToHex(r * 255, g * 255, b * 255);
          const colorName = generateColorName(currentPath, index);
          colors.set(colorName, hex);
        }
      });
    }

    // 递归遍历子节点
    if (n.children) {
      n.children.forEach(child => traverse(child, currentPath));
    }
  }

  traverse(node);
  return colors;
}

// 提取文本样式
function extractTextStyles(node: FigmaNode): Map<string, any> {
  const textStyles = new Map<string, any>();

  function traverse(n: FigmaNode, path: string = '') {
    const currentPath = path ? `${path}/${n.name}` : n.name;

    if (n.type === 'TEXT' && n.style) {
      const style = n.style;
      textStyles.set(currentPath, {
        fontFamily: style.fontFamily || 'SF Pro Text',
        fontSize: style.fontSize || 16,
        fontWeight: style.fontWeight || 400,
        lineHeight: style.lineHeightPx ? style.lineHeightPx / (style.fontSize || 16) : 1.5,
        letterSpacing: style.letterSpacing || 0,
      });
    }

    if (n.children) {
      n.children.forEach(child => traverse(child, currentPath));
    }
  }

  traverse(node);
  return textStyles;
}

// 辅助函数：RGB 转 Hex
function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => Math.round(n).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// 辅助函数：生成颜色名称
function generateColorName(path: string, index: number): string {
  // 清理路径名
  const cleanPath = path
    .replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();

  return `${cleanPath}-${index}`;
}

// 生成 SCSS 变量文件
function generateScssVariables(colors: Map<string, string>, textStyles: Map<string, any>): string {
  let scss = '// Auto-generated from Figma\n// Do not edit manually\n\n';

  // 颜色变量
  scss += '// Colors\n';
  colors.forEach((value, key) => {
    scss += `$${key}: ${value};\n`;
  });

  scss += '\n// Typography\n';
  textStyles.forEach((value, key) => {
    const cleanKey = key.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    scss += `$font-${cleanKey}-size: ${value.fontSize}px;\n`;
    scss += `$font-${cleanKey}-weight: ${value.fontWeight};\n`;
  });

  return scss;
}

// 主函数
async function syncFromFigma(accessToken: string) {
  try {
    console.log('🔄 Fetching Figma file...');
    const file = await getFigmaFile(accessToken, FIGMA_FILE_ID);

    console.log('🎨 Extracting colors...');
    const colors = extractColors(file.document);

    console.log('📝 Extracting text styles...');
    const textStyles = extractTextStyles(file.document);

    console.log('📄 Generating SCSS...');
    const scss = generateScssVariables(colors, textStyles);

    // 保存到文件
    const fs = await import('fs');
    const path = await import('path');
    const outputPath = path.join(process.cwd(), 'src/styles/figma-variables.scss');

    fs.writeFileSync(outputPath, scss);

    console.log('✅ Figma sync completed!');
    console.log(`📁 Output: ${outputPath}`);
    console.log(`🎨 Colors found: ${colors.size}`);
    console.log(`📝 Text styles found: ${textStyles.size}`);

    // 打印颜色预览
    console.log('\n🎨 Color Preview:');
    colors.forEach((value, key) => {
      console.log(`  ${key}: ${value}`);
    });

  } catch (error) {
    console.error('❌ Figma sync failed:', error);
    process.exit(1);
  }
}

// 使用说明
console.log(`
🎨 Figma Sync Tool
==================

Usage:
  npx tsx scripts/figma-sync.ts <access-token>

Example:
  npx tsx scripts/figma-sync.ts figd_xxxxxxxx

Note:
  Get your access token from: https://www.figma.com/developers/api#access-tokens
`);

// 如果提供了 token，执行同步
const accessToken = process.argv[2];
if (accessToken) {
  syncFromFigma(accessToken);
}

export { getFigmaFile, getFigmaImages, extractColors, extractTextStyles };
