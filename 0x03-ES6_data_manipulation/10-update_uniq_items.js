export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  if (map.values  === 1) {
    return map.set(key, 100);
  }
}
