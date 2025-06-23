function updateTask(tasks, index, newTask) {
  const updatedArray = tasks.with(index, newTask);
  return [updatedArray, tasks];
}