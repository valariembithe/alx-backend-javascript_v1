export default function iterateThroughObject(reportWithIterator) {
  const employees = [];
  for (employee of reportWithIterator) {
    employees.push(employee);
  }
  return employees.join(' | ');
}
