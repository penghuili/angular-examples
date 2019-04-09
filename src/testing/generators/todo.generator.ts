import { gen } from 'testcheck';

export function generateTodos(length: number) {
  return gen.array(generateTodo(), { size: length });
}
export function generateTodo() {
  return gen.object({
    id: gen.sPosInt,
    title: gen.alphaNumString.notEmpty(),
  });
}