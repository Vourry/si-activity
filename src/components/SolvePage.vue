<script setup lang="ts">
import { ref } from "vue";
import { Question, gen } from "../core/solve";
import { addQuestion, validateAnswer } from "../core/store";
import { nextId } from "../core/store";

const question = ref<null|Question>(null);
const contentId = ref(String());
const content = ref(String());
const result = ref<undefined|null|boolean>(undefined);

function getQuestion() {
  question.value = {...gen(true), id: nextId()};
  addQuestion(question.value);
}

function validate() {
  const validation = validateAnswer(parseInt(contentId.value), content.value);
  result.value = validation;
}

function clear() {
  question.value = null;
}

function clearResult() {
  result.value = undefined;
  contentId.value = String();
  content.value = String();
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
        <div>参与者 ID: {{ question?.id }}</div>
        <div>数列: {{ question?.sequence }}</div>
        <div>密文：{{ question?.cipher }}</div>
        <button @click="getQuestion">领取问题</button>
        <button @click="clear">清空信息</button>
        <hr />
        <div class="text-sm font-medium text-gray-700">验证答案</div>
        <div v-if="result !== undefined">
          <div class="text-green-500" v-if="result === true">✅ 答案正确。</div>
          <div class="text-red-500" v-else-if="result === false">❌ 答案错误。</div>
          <div class="text-sky-600" v-else-if="result === null">🤔 ID 不存在。</div>
        </div>
        <div class="space-x-1">
          <input v-model="contentId" placeholder="参与者 ID" />
          <input v-model="content" placeholder="明文" />
        </div>
        <button @click="validate">验证</button>
        <button @click="clearResult">清空结果</button>
      </div>
    </div>
  </div>
</template>
