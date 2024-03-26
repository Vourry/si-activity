<template>
  <div class="flex justify-center">
    <div class="rounded border">
      <div class="bg-blue-500 rounded text-sm font-medium text-white p-3">
        惠州市第一中学科技文化艺术节管理系统
      </div>
      <div class="p-6 space-y-6">
        <div class="text-sm">
          欢迎来到惠州市第一中学科技文化艺术节管理系统，请选择需要进入的子系统。
        </div>
        <div class="flex">
          <RouterLink to="/lottery"><button>抽奖</button></RouterLink>
          <RouterLink to="/solve-med"><button>中难度组</button></RouterLink>
          <RouterLink to="/solve"><button>高难度组</button></RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
