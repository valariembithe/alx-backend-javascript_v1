export default function cleanSet(set, startString) {
  const parts = [];
  if (!(set instanceof Set) || !(startString) || !(set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const subString = value.substring(startString.length);

      if (subString && subString !== value) {
        parts.push(subString);
      }
    }
  }
  return parts.join('-');
}
