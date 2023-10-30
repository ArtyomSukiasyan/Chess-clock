function get(name: string) {
  return Number(localStorage.getItem(name) || 0);
}

function save(name: string, value: number) {
  localStorage.setItem(name, JSON.stringify(value));
}

export const local = { get, save };
