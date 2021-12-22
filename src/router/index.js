/*
 * @Author: your name
 * @Date: 2021-12-22 17:28:53
 * @LastEditTime: 2021-12-22 17:36:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \bi-container-demo\src\router\index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
