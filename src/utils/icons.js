/**
 * 图标系统文件
 * 1. 首先在 http://www.iconfont.cn/ 或者其他网站 下载 svg 文件（下载设置成白色）
 * 2. 替换 fill 成 color width height 到对应
 * 3. 拷贝使用
 */
module.exports = {
  'bells': (color = '#fff', width = 64, height = 64) => `<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1496390256086" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" xmlns:xlink="http://www.w3.org/1999/xlink" width=${width} height=${height}><defs><style type="text/css"></style></defs><path d="M642.1 840c0 67.1-57.1 119.3-128.4 119.3-71.3 0-128.4-52.2-128.4-119.3h256.8m-42.8-696.2c0-44.8-37.1-79.6-85.6-79.6-48.5 0-85.6 34.8-85.6 79.6v12.4c-117 37.3-214 156.6-214 295.9v109.4s0 156.6-42.8 159.1c-25.7 0-42.8 17.4-42.8 39.8s20 39.8 42.8 39.8h684.8c22.8 0 42.8-17.4 42.8-39.8s-20-39.8-42.8-39.8c-42.8 0-42.8-159.1-42.8-159.1V452.1c0-139.2-91.3-256.1-214-295.9v-12.4" p-id="2400" fill=${color}></path></svg>`,
}