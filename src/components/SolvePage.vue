<script setup lang="ts">
import { ref } from "vue";
import { Question, gen } from "../core/solve";

const id = ref(-1);
const question = ref<null|Question>(null);
const contentId = ref(String());
const content = ref(String());
const result = ref<null|boolean>(null);

function getQuestion() {
  id.value = 1;
  question.value = gen(true);
}

function validate() {
  result.value = content.value === question.value?.plain;
}

function clear() {
  id.value = -1;
  question.value = null;
  contentId.value = String();
  content.value = String();
  result.value = null;
}
</script>

<template>
  <div class="flex justify-center">
    <div class="rounded border">
      <div class="bg-blue-500 rounded text-sm font-medium text-white p-3 flex">
        <RouterLink to="/"><div>←返回</div></RouterLink>
        <div class="flex-grow mx-3">高难度组</div>
      </div>
      <div class="p-6 space-y-6">
        <div class="text-sm font-medium text-gray-700">领取问题</div>
        <div class="text-sm">点击“领取问题”后会出现你的参与者 ID、数列和密文。将它们记录在你的草稿纸后点击“清空信息”。</div>
        <div>参与者 ID: {{ id }}</div>
        <div>数列: {{ question?.sequence }}</div>
        <div>密文：{{ question?.cipher }}</div>
        <hr/>
        <div>偏移量： {{ question?.deviation }}</div>
        <div>明文：{{ question?.plain }}</div>
        <button @click="getQuestion">领取问题</button>
        <button @click="clear">清空信息</button>
        <hr />
        <div class="text-sm font-medium text-gray-700">验证答案</div>
        <div v-if="result !== null">
          <div class="text-green-500" v-if="result">✅ 答案正确。</div>
          <div class="text-red-500" v-else>❌ 答案错误。</div>
        </div>
        <div class="space-x-1">
          <input v-model="contentId" placeholder="参与者 ID" />
          <input v-model="content" placeholder="明文" />
        </div>
        <button @click="validate">验证</button>
      </div>
    </div>
  </div>
</template>
