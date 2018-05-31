<template>
  <div>
    <div class="row mb-5">
      <div class="col-4">
        <!-- 导航 -->
        <div class="list-group mb-5">
          <router-link tag="li" class="nav-link list-group-item list-group-item-action" :to="{name:'historyLink'}">历史订单</router-link>
          <router-link tag="li" class="nav-link list-group-item list-group-item-action" :to="{name:'contactLink'}">联系我们</router-link>
          <router-link tag="li" class="nav-link list-group-item list-group-item-action" :to="{name:'orderingGuideLink'}">点餐文档</router-link>
          <router-link tag="li" class="nav-link list-group-item list-group-item-action" :to="{name:'deliveryLink'}">快递信息</router-link>
        </div>
      </div>
      <div class="col-8">
        <!-- 导航所定义的内容 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
 