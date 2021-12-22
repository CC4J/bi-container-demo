<!--
 * @Author: your name
 * @Date: 2021-12-22 17:28:53
 * @LastEditTime: 2021-12-22 19:55:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \bi-container-demo\src\views\Home.vue
-->
<template>
  <div class="home">
    <bi-container :options="{ width: 3840, height: 2160 }">
      <div class="content">数据大屏内容</div>
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
  font-size: 140px;
  width: 3840px;
  height: 2160px;
  background: #eee;
  // transform: scale(0.5);
}
</style>
