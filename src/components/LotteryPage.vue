<script setup lang="ts">
import { ref } from "vue";
import { items, saveItems } from "../core/lottery";
import { randNum } from "../core";

const names = ["Word 便签盒", "PowerPoint 便签盒", "鲨鱼", "PCB 星空装饰画", "中国龙", "蛋壳"];
const result = ref(-1);

function roll() {
  const denominator = items.reduce((accumulator, current) => accumulator + current);
  const randomNumber = randNum(denominator);
  if (randomNumber < items[0]) result.value = 0;
  else if (randomNumber < items[0] + items[1]) result.value = 1;
  else if (randomNumber < items[0] + items[1] + items[2]) result.value = 2;
  else if (randomNumber < items[0] + items[1] + items[2] + items[3]) result.value = 3;
  else if (randomNumber < items[0] + items[1] + items[2] + items[3] + items[4]) result.value = 4;
  else if (randomNumber < items[0] + items[1] + items[2] + items[3] + items[4] + items[5]) result.value = 5;
}

function accept() {
  items[result.value]--;
  result.value = -1;
  saveItems();
}
</script>

<template>
  <div class="flex justify-center">
    <div class="rounded border">
      <div class="bg-blue-500 rounded text-sm font-medium text-white p-3 flex">
        <RouterLink to="/"><div>←返回</div></RouterLink>
        <div class="flex-grow mx-3">抽奖</div>
      </div>
      <div class="p-6 space-y-6">
        <div class="text-sm">
          欢迎来到惠州市第一中学科技文化艺术节抽奖子系统。
        </div>
      </div>
      <hr/>
      <div class="p-6">
        <div class="text-sm font-medium text-gray-700">剩余量</div>
        <div v-for="[index, name] of Object.entries(names)">
          {{ name }}: {{ items[parseInt(index)] }}
        </div>
      </div>
      <hr/>
      <div class="p-6">
        <div class="text-blue-600 font-medium" v-if="result !== -1">{{ names[result] }}</div>
        <div v-else>点击「I'm Feeling Lucky」来获得奖品吧🥰！</div>
        <div class="text-sm">请和相关人员确认抽奖结果并拿到奖品后再点击「接受」🤔</div>
        <div class="flex">
          <button :disabled="result !== -1" @click="roll">
            I'm Feeling Lucky
          </button>
          <button @click="accept">接受</button>
        </div>
      </div>
    </div>
  </div>
</template>
