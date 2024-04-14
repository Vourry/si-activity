export const items = JSON.parse(localStorage.getItem("lottery-items") ?? "[5, 5, 5, 20, 15, 20]") as number[];

export function saveItems() {
  localStorage.setItem("lottery-items", JSON.stringify(items));
}
