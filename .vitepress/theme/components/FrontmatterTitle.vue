<template>
  <span v-if="$frontmatter.title" class="page-title">{{ $frontmatter.title }}</span>
</template>

<style>
.page-title {
  color: #333;
  font-size: 24px;
  font-weight: 600;
}
</style>
