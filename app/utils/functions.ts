let counter = 0;
export function generateUniqueId() {
  counter++;
  return `id-${counter}`;
}
