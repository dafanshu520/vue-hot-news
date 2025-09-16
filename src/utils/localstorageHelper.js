export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function appendItem(key, value) {
  const items = getItem(key) || [];

  items.push(value);
  setItem(key, items);
}
