<template>
  <div class="home">
    <!-- 传递数据大屏宽高 -->
    <bi-container :options="{ width: 3000, height: 1672 }">
      <!-- 使用图片来模拟内容 -->
      <img class="content" src="../assets/1.jpeg" alt="" />
    </bi-container>
  </div>
</template>

<script>
import BiContainer from '../components/BiContainer.vue';
export default {
  name: 'Home',
  components: {
    BiContainer
  }
};
</script>

<style lang="less" scoped>
.content {
  width: 3000px;
  height: 1672px;
}
</style>
