<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-footer-before>
      <div v-if="$frontmatter.date" class="create-time">
        文档创建时间: {{ $frontmatter.date }}
      </div>
    </template>
  </Layout>
</template>

<style>
.create-time {
  color: #666;
  font-size: 14px;
  font-weight: 500;
}
</style>