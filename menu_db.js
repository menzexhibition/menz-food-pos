/**
 * MENZ 菜品配方库
 * 每份 = 10人份（快餐标准）
 * 
 * 字段说明：
 * name: 菜品名称
 * tier: A=招牌/A档 | B=荤/B档 | C=素/C档 | D=蒸/D档 | E=低价蒸/E档
 * protein: 主料分类（pork/beef/chicken/fish/tofu/egg/vegetable）
 * ingredients: 食材列表（单位：斤）
 * cost_estimate: 估算食材成本（元/份，10人份）
 * prep_time: 预估备菜时间（分钟）
 * cook_time: 预估烹饪时间（分钟）
 * popularity: 热度评分 1-5（1=冷门，5=爆款）
 */

const MENU_DB = [

  // ========== A档：招牌特色菜（营销用，占预算15%）==========
  {
    id: 'A1',
    name: '糖醋排骨',
    tier: 'A',
    protein: 'pork',
    cost_estimate: 38,
    prep_time: 15,
    cook_time: 25,
    popularity: 5,
    ingredients: [
      { name: '排骨', amount: 3.0, category: 'main_protein' },
      { name: '醋', amount: 0.3, category: 'sauce' },
      { name: '糖', amount: 0.25, category: 'sauce' },
      { name: '生粉', amount: 0.1, category: 'seasoning' },
      { name: '葱姜', amount: 0.1, category: 'aroma' }
    ],
    tags: ['招牌', '酸甜', '老少皆宜']
  },
  {
    id: 'A2',
    name: '白切鸡',
    tier: 'A',
    protein: 'chicken',
    cost_estimate: 32,
    prep_time: 10,
    cook_time: 30,
    popularity: 5,
    ingredients: [
      { name: '清远鸡', amount: 3.5, category: 'main_protein' },
      { name: '葱姜', amount: 0.2, category: 'aroma' },
      { name: '盐', amount: 0.05, category: 'seasoning' },
      { name: '花生油', amount: 0.1, category: 'sauce' }
    ],
    tags: ['招牌', '清淡', '广东经典']
  },
  {
    id: 'A3',
    name: '红烧狮子头',
    tier: 'A',
    protein: 'pork',
    cost_estimate: 30,
    prep_time: 20,
    cook_time: 40,
    popularity: 4,
    ingredients: [
      { name: '猪肉末', amount: 2.5, category: 'main_protein' },
      { name: '马蹄', amount: 0.8, category: 'vegetable' },
      { name: '鸡蛋', amount: 0.3, category: 'protein' },
      { name: '生粉', amount: 0.15, category: 'seasoning' },
      { name: '酱油', amount: 0.1, category: 'sauce' }
    ],
    tags: ['招牌', '软糯', '宴客菜']
  },
  {
    id: 'A4',
    name: '清蒸鲈鱼',
    tier: 'A',
    protein: 'fish',
    cost_estimate: 45,
    prep_time: 8,
    cook_time: 15,
    popularity: 4,
    ingredients: [
      { name: '鲈鱼', amount: 3.0, category: 'main_protein' },
      { name: '葱姜', amount: 0.15, category: 'aroma' },
      { name: '蒸鱼豉油', amount: 0.1, category: 'sauce' },
      { name: '花生油', amount: 0.1, category: 'sauce' }
    ],
    tags: ['招牌', '清淡', '高价值']
  },
  {
    id: 'A5',
    name: '碌鹅',
    tier: 'A',
    protein: 'duck',
    cost_estimate: 35,
    prep_time: 15,
    cook_time: 50,
    popularity: 4,
    ingredients: [
      { name: '鹅', amount: 4.0, category: 'main_protein' },
      { name: '柱侯酱', amount: 0.2, category: 'sauce' },
      { name: '糖', amount: 0.1, category: 'sauce' },
      { name: '葱姜蒜', amount: 0.15, category: 'aroma' }
    ],
    tags: ['招牌', '咸香', '广东特色']
  },

  // ========== B档：普通荤菜（吃饱主力）==========
  {
    id: 'B1',
    name: '红烧肉',
    tier: 'B',
    protein: 'pork',
    cost_estimate: 25,
    prep_time: 15,
    cook_time: 45,
    popularity: 5,
    ingredients: [
      { name: '五花肉', amount: 2.5, category: 'main_protein' },
      { name: '酱油', amount: 0.15, category: 'sauce' },
      { name: '糖', amount: 0.15, category: 'sauce' },
      { name: '葱姜', amount: 0.1, category: 'aroma' }
    ],
    tags: ['下饭', '肥而不腻']
  },
  {
    id: 'B2',
    name: '宫保鸡丁',
    tier: 'B',
    protein: 'chicken',
    cost_estimate: 22,
    prep_time: 12,
    cook_time: 10,
    popularity: 5,
    ingredients: [
      { name: '鸡腿肉', amount: 2.0, category: 'main_protein' },
      { name: '花生', amount: 0.4, category: 'nut' },
      { name: '干辣椒', amount: 0.08, category: 'spice' },
      { name: '黄瓜丁', amount: 0.6, category: 'vegetable' },
      { name: '花椒', amount: 0.02, category: 'spice' },
      { name: '豆瓣酱', amount: 0.1, category: 'sauce' }
    ],
    tags: ['香辣', '经典川菜', '下饭']
  },
  {
    id: 'B3',
    name: '土豆烧肉',
    tier: 'B',
    protein: 'pork',
    cost_estimate: 20,
    prep_time: 10,
    cook_time: 30,
    popularity: 4,
    ingredients: [
      { name: '猪肉', amount: 1.5, category: 'main_protein' },
      { name: '土豆', amount: 2.0, category: 'vegetable' },
      { name: '酱油', amount: 0.1, category: 'sauce' },
      { name: '糖', amount: 0.08, category: 'sauce' }
    ],
    tags: ['家常', '管饱', '土豆可复用']
  },
  {
    id: 'B4',
    name: '咖喱土豆鸡',
    tier: 'B',
    protein: 'chicken',
    cost_estimate: 22,
    prep_time: 10,
    cook_time: 20,
    popularity: 4,
    ingredients: [
      { name: '鸡肉', amount: 2.0, category: 'main_protein' },
      { name: '土豆', amount: 1.5, category: 'vegetable' },
      { name: '咖喱块', amount: 0.3, category: 'sauce' },
      { name: '洋葱', amount: 0.4, category: 'vegetable' }
    ],
    tags: ['咖喱', '浓郁', '土豆可复用']
  },
  {
    id: 'B5',
    name: '番茄煮牛肉',
    tier: 'B',
    protein: 'beef',
    cost_estimate: 28,
    prep_time: 10,
    cook_time: 25,
    popularity: 4,
    ingredients: [
      { name: '牛肉', amount: 2.0, category: 'main_protein' },
      { name: '番茄', amount: 1.8, category: 'vegetable' },
      { name: '洋葱', amount: 0.3, category: 'vegetable' },
      { name: '番茄酱', amount: 0.1, category: 'sauce' }
    ],
    tags: ['酸甜', '开胃', '番茄可复用']
  },
  {
    id: 'B6',
    name: '鱼香肉丝',
    tier: 'B',
    protein: 'pork',
    cost_estimate: 20,
    prep_time: 15,
    cook_time: 10,
    popularity: 4,
    ingredients: [
      { name: '猪肉丝', amount: 1.8, category: 'main_protein' },
      { name: '木耳', amount: 0.3, category: 'vegetable' },
      { name: '胡萝卜丝', amount: 0.4, category: 'vegetable' },
      { name: '豆瓣酱', amount: 0.1, category: 'sauce' },
      { name: '醋糖', amount: 0.15, category: 'sauce' }
    ],
    tags: ['鱼香', '经典川味']
  },

  // ========== C档：素菜（解腻、清爽）==========
  {
    id: 'C1',
    name: '番茄炒蛋',
    tier: 'C',
    protein: 'egg',
    cost_estimate: 10,
    prep_time: 5,
    cook_time: 8,
    popularity: 5,
    ingredients: [
      { name: '番茄', amount: 1.8, category: 'vegetable' },
      { name: '鸡蛋', amount: 1.0, category: 'protein' },
      { name: '葱花', amount: 0.05, category: 'aroma' }
    ],
    tags: ['经典', '老少皆宜', '番茄可复用']
  },
  {
    id: 'C2',
    name: '蒜蓉炒菜心',
    tier: 'C',
    protein: 'vegetable',
    cost_estimate: 8,
    prep_time: 5,
    cook_time: 5,
    popularity: 4,
    ingredients: [
      { name: '菜心', amount: 2.0, category: 'green_vegetable' },
      { name: '蒜蓉', amount: 0.05, category: 'aroma' },
      { name: '盐', amount: 0.03, category: 'seasoning' }
    ],
    tags: ['清淡', '广东经典']
  },
  {
    id: 'C3',
    name: '酸辣土豆丝',
    tier: 'C',
    protein: 'vegetable',
    cost_estimate: 6,
    prep_time: 8,
    cook_time: 5,
    popularity: 5,
    ingredients: [
      { name: '土豆', amount: 2.0, category: 'vegetable' },
      { name: '醋', amount: 0.1, category: 'sauce' },
      { name: '干辣椒', amount: 0.03, category: 'spice' },
      { name: '蒜片', amount: 0.03, category: 'aroma' }
    ],
    tags: ['酸辣', '下饭', '土豆可复用']
  },
  {
    id: 'C4',
    name: '白灼生菜',
    tier: 'C',
    protein: 'vegetable',
    cost_estimate: 7,
    prep_time: 3,
    cook_time: 3,
    popularity: 4,
    ingredients: [
      { name: '生菜', amount: 2.0, category: 'green_vegetable' },
      { name: '蚝油', amount: 0.08, category: 'sauce' },
      { name: '蒜蓉', amount: 0.03, category: 'aroma' }
    ],
    tags: ['清淡', '健康', '快手']
  },
  {
    id: 'C5',
    name: '麻婆豆腐',
    tier: 'C',
    protein: 'tofu',
    cost_estimate: 9,
    prep_time: 5,
    cook_time: 8,
    popularity: 4,
    ingredients: [
      { name: '豆腐', amount: 2.0, category: 'protein' },
      { name: '猪肉末', amount: 0.5, category: 'main_protein' },
      { name: '豆瓣酱', amount: 0.1, category: 'sauce' },
      { name: '花椒', amount: 0.02, category: 'spice' },
      { name: '葱姜蒜', amount: 0.08, category: 'aroma' }
    ],
    tags: ['麻辣', '川味经典']
  },
  {
    id: 'C6',
    name: '清炒西兰花',
    tier: 'C',
    protein: 'vegetable',
    cost_estimate: 9,
    prep_time: 5,
    cook_time: 5,
    popularity: 3,
    ingredients: [
      { name: '西兰花', amount: 2.0, category: 'green_vegetable' },
      { name: '蒜蓉', amount: 0.05, category: 'aroma' },
      { name: '盐', amount: 0.03, category: 'seasoning' }
    ],
    tags: ['健康', '清爽']
  },

  // ========== D档：蒸菜（保温好，适合快餐）==========
  {
    id: 'D1',
    name: '蒜蓉蒸排骨',
    tier: 'D',
    protein: 'pork',
    cost_estimate: 28,
    prep_time: 10,
    cook_time: 20,
    popularity: 4,
    ingredients: [
      { name: '排骨', amount: 2.0, category: 'main_protein' },
      { name: '蒜蓉', amount: 0.1, category: 'aroma' },
      { name: '豆豉', amount: 0.05, category: 'sauce' },
      { name: '生粉', amount: 0.05, category: 'seasoning' }
    ],
    tags: ['蒸菜', '蒜香', '老少皆宜']
  },
  {
    id: 'D2',
    name: '梅菜蒸肉饼',
    tier: 'D',
    protein: 'pork',
    cost_estimate: 18,
    prep_time: 10,
    cook_time: 20,
    popularity: 4,
    ingredients: [
      { name: '猪肉末', amount: 1.8, category: 'main_protein' },
      { name: '梅菜', amount: 0.5, category: 'vegetable' },
      { name: '酱油', amount: 0.05, category: 'sauce' },
      { name: '鸡蛋', amount: 0.2, category: 'protein' }
    ],
    tags: ['蒸菜', '咸香', '下饭']
  },

  // ========== E档：低价蒸菜（成本控制）==========
  {
    id: 'E1',
    name: '蒸水蛋',
    tier: 'E',
    protein: 'egg',
    cost_estimate: 6,
    prep_time: 3,
    cook_time: 10,
    popularity: 3,
    ingredients: [
      { name: '鸡蛋', amount: 1.2, category: 'protein' },
      { name: '葱花', amount: 0.03, category: 'aroma' },
      { name: '酱油', amount: 0.03, category: 'sauce' }
    ],
    tags: ['低价', '嫩滑', '老少皆宜']
  },
  {
    id: 'E2',
    name: '蒜蓉蒸茄子',
    tier: 'E',
    protein: 'vegetable',
    cost_estimate: 7,
    prep_time: 5,
    cook_time: 12,
    popularity: 3,
    ingredients: [
      { name: '茄子', amount: 2.0, category: 'vegetable' },
      { name: '蒜蓉', amount: 0.08, category: 'aroma' },
      { name: '生抽', amount: 0.05, category: 'sauce' },
      { name: '花生油', amount: 0.05, category: 'sauce' }
    ],
    tags: ['低价', '蒜香', '素食友好']
  },

  // ========== 汤/小菜（免费不限量）==========
  {
    id: 'SOUP1',
    name: '紫菜蛋花汤',
    tier: 'SOUP',
    protein: 'egg',
    cost_estimate: 4,
    prep_time: 3,
    cook_time: 5,
    popularity: 5,
    ingredients: [
      { name: '紫菜', amount: 0.1, category: 'soup_base' },
      { name: '鸡蛋', amount: 0.5, category: 'protein' },
      { name: '虾皮', amount: 0.05, category: 'soup_base' }
    ],
    tags: ['免费', '快手', '经典汤品']
  },
  {
    id: 'SOUP2',
    name: '番茄蛋花汤',
    tier: 'SOUP',
    protein: 'egg',
    cost_estimate: 5,
    prep_time: 3,
    cook_time: 5,
    popularity: 4,
    ingredients: [
      { name: '番茄', amount: 0.6, category: 'vegetable' },
      { name: '鸡蛋', amount: 0.4, category: 'protein' }
    ],
    tags: ['免费', '酸甜', '番茄可复用']
  }

];

// ========== 食材价格基准表（默认值，可从菜价录入更新）==========
const PRICE_TABLE = {
  '排骨': 38, '五花肉': 18, '猪肉': 16, '猪肉末': 18, '猪肉丝': 18,
  '牛肉': 45, '牛腩': 35,
  '鸡肉': 15, '鸡腿肉': 18, '清远鸡': 28,
  '鹅': 22,
  '鲈鱼': 28,
  '鸡蛋': 6, '鸭蛋': 8,
  '土豆': 1.5, '番茄': 3, '西红柿': 3,
  '菜心': 3, '生菜': 2.5, '小白菜': 2.5,
  '西兰花': 4, '花菜': 3,
  '黄瓜': 2, '青瓜': 2,
  '茄子': 2.5, '豆角': 4, '四季豆': 4,
  '豆腐': 2, '豆芽': 1, '支竹': 8,
  '木耳': 15, '香菇': 18,
  '洋葱': 2, '青椒': 4, '红椒': 5,
  '胡萝卜': 2, '白萝卜': 1.5, '玉米': 3,
  '土豆丝': 1.5, '黄瓜丁': 2,
  '马蹄': 4,
  '花生': 12, '干辣椒': 20, '花椒': 30,
  '梅菜': 8, '紫菜': 25, '虾皮': 20,
  '醋': 3, '糖': 4, '盐': 1, '酱油': 5, '蚝油': 8,
  '生粉': 4, '生抽': 5, '豆瓣酱': 8,
  '柱侯酱': 10, '蒸鱼豉油': 12, '咖喱块': 15,
  '番茄酱': 5, '麻酱': 10,
  '葱姜': 5, '葱姜蒜': 5, '葱花': 5, '蒜蓉': 8, '蒜片': 8,
  '花生油': 12, '调和油': 8, '芝麻油': 20
};

// ========== 辅助函数 ==========

/**
 * 计算某道菜的食材成本
 */
function calcDishCost(dish, prices = PRICE_TABLE) {
  let total = 0;
  for (const ing of dish.ingredients) {
    const price = prices[ing.name] || 0;
    total += price * ing.amount;
  }
  return Math.round(total * 10) / 10;
}

/**
 * 获取某类档位的所有菜品
 */
function getDishesByTier(tier) {
  return MENU_DB.filter(d => d.tier === tier);
}

/**
 * 按热度排序
 */
function sortByPopularity(dishes) {
  return [...dishes].sort((a, b) => b.popularity - a.popularity);
}

/**
 * 获取所有荤菜（B档为主）
 */
function getMeatDishes() {
  return MENU_DB.filter(d => ['A', 'B'].includes(d.tier));
}

/**
 * 获取所有素菜
 */
function getVegDishes() {
  return MENU_DB.filter(d => d.tier === 'C');
}

/**
 * 获取所有蒸菜
 */
function getSteamDishes() {
  return MENU_DB.filter(d => ['D', 'E'].includes(d.tier));
}

/**
 * 计算某道菜的食材复用指数（食材是否同时用于其他菜）
 * 数值越高 = 这道菜的食材越容易和其他菜共享
 */
function calcIngredientReuse(dish, allDishes) {
  const ingNames = new Set(dish.ingredients.map(i => i.name));
  let sharedCount = 0;
  for (const other of allDishes) {
    if (other.id === dish.id) continue;
    for (const ing of other.ingredients) {
      if (ingNames.has(ing.name)) {
        sharedCount++;
        break;
      }
    }
  }
  return sharedCount;
}

/**
 * 获取食材被复用的菜品列表
 */
function getIngredientReuseMap() {
  const map = {};
  for (const dish of MENU_DB) {
    for (const ing of dish.ingredients) {
      if (!map[ing.name]) map[ing.name] = [];
      map[ing.name].push({ dish: dish.name, id: dish.id, tier: dish.tier });
    }
  }
  return map;
}

/**
 * 打印配方库摘要（用于调试）
 */
function printMenuSummary() {
  const tiers = ['A', 'B', 'C', 'D', 'E', 'SOUP'];
  const tierNames = { A: '⭐A档', B: '🥩B档', C: '🥬C档', D: '🫖D档', E: '🫖E档(低价)', SOUP: '🍲汤' };
  
  for (const tier of tiers) {
    const dishes = getDishesByTier(tier);
    console.log(`\n${tierNames[tier]}（${dishes.length}道）`);
    for (const d of dishes) {
      const cost = calcDishCost(d);
      console.log(`  ${d.name} | 成本¥${cost} | 热度${'★'.repeat(d.popularity)}${'☆'.repeat(5-d.popularity)}`);
    }
  }
}

// 测试
printMenuSummary();

// 导出（UMD格式，支持浏览器和Node.js）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MENU_DB, PRICE_TABLE, calcDishCost, getDishesByTier, sortByPopularity, getMeatDishes, getVegDishes, getSteamDishes, calcIngredientReuse, getIngredientReuseMap };
}
