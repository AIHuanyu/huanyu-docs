<template>
  <div v-if="$frontmatter.date" class="create-time">
    文档创建时间: {{ formatDate($frontmatter.date) }}
  </div>
</template>
<script setup>
// 定义格式化函数，使用 Intl.DateTimeFormat 转换为“2025年10月25日”格式
const formatDate = (dateStr) => {
  // 将日期字符串（如"2025-10-25"）转为 Date 对象
  const date = new Date(dateStr);
  // 配置中文日期格式（带“年/月/日”文字）
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  // 使用中文环境格式化日期
  return new Intl.DateTimeFormat("zh-CN", options).format(date);
};
</script>
<style>
.create-time {
  color: #666;
  font-size: 14px;
  font-weight: 500;
}
</style>
