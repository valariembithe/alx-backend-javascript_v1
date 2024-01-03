export default function createIteratorObject(report) {
  const iterator = {
    for (let dep in report.allEmployees) {
      for (emp in dep) {
        return emp;
      }
    }
  };
}
