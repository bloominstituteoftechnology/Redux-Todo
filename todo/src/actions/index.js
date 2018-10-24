export const TO_DO_CREATE = "TO_DO_CREATE";
export const TO_DO_DELETE = "TO_DO_DELETE";
export const TO_DO_COMPLETE = "TO_DO_COMPLETE";

export function toDoCreate(toDoTask) {
  return {
    type: TO_DO_CREATE,
    task: toDoTask
  };
}

export function toDoComplete(id) {
  return {
    type: TO_DO_COMPLETE,
    id: id
  };
}

export function toDoDelete(id) {
  return {
    type: TO_DO_DELETE,
    id: id
  };
}
