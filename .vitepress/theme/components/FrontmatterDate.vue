<template>
  <div v-if="$frontmatter.date" class="create-time">
    文档创建时间: {{ $frontmatter.date }}
  </div>
</template>

<style>
.create-time {
  color: #666;
  font-size: 14px;
  font-weight: 500;
}
</style>
