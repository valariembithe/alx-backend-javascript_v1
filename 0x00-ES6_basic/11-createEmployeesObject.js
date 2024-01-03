export default function createEmployeesObject(departmentName, employees) {
  const array = {
    [departmentName]: [...employees],
  };
  return array;
}
