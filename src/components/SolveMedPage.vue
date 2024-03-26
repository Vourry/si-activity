<script setup lang="ts">
import { computed, ref } from "vue";
import { genBinaryNumbers } from "../core/med";

const nums = ref<number[]>([]);
const content = ref(String());
const result = ref<null|boolean>(null);
const ans = computed(() => nums.value.reduce((partial, next) => partial + next, 0));

function getQuestion() {
  nums.value = genBinaryNumbers();
}

function validate() {
  result.value = parseInt(content.value, 16) === ans.value;
}

function clear() {
  nums.value = [];
  content.value = String();
  result.value = null;
}
</script>

<template>
  <div class="flex justify-center">
    <div class="rounded border">
      <div class="bg-blue-500 rounded text-sm font-medium text-white p-3 flex">
        <RouterLink to="/"><div>←返回</div></RouterLink>
        <div class="flex-grow mx-3">中难度组</div>
      </div>
      <div class="p-6 space-y-6">
        <div class="text-sm font-medium text-gray-700">领取问题</div>
        <div class="text-sm">点击 “领取问题” 后会出现题目，请当场解决。</div>
        <div v-for="num of nums">
          {{ num.toString(2) }}
        </div>
        <hr />
        <div>答案：{{ ans.toString(16) }}</div>
        <button @click="getQuestion">领取问题</button>
        <button @click="clear">清空信息</button>
        <hr />
        <div class="text-sm font-medium text-gray-700">验证答案</div>
        <div v-if="result !== null">
          <div class="text-green-500" v-if="result">✅ 答案正确。</div>
          <div class="text-red-500" v-else>❌ 答案错误。</div>
        </div>
        <div class="text-sm">以十六进制形式输入上述四数字之和。（使用小写字母）</div>
        <div class="space-x-1">
          <input v-model="content" placeholder="答案" />
        </div>
        <button @click="validate">验证</button>
      </div>
    </div>
  </div>
</template>
