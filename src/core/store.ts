import { Question } from "./solve";

const questions = JSON.parse(localStorage.getItem("questions") ?? "[]") as Question[];
let cursor = parseInt(localStorage.getItem("cursor") ?? "0");
export function saveQuestions() {
  localStorage.setItem("questions", JSON.stringify(questions));
}
export function saveCursor() {
  localStorage.setItem("cursor", cursor.toString());
}

export function nextId() {
  cursor++;
  saveCursor();
  return cursor;
}

export function addQuestion(question: Question) {
  questions.push(question);
  saveQuestions();
  saveCursor();
}

export function findQuestion(id: number) {
  return questions.find(x => x.id === id);
}

export function validateAnswer(id: number, content: string) {
  const target = findQuestion(id);
  if (target) {
    const result = target.plain === content;
    target.result = result;
    saveQuestions();
    return result;
  }
  return null;
}
