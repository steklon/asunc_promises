import json from '../parser';

describe('Тестирование функции json', () => {
  test('Корректная обработка ArrayBuffer', async () => {
    const data = new Uint16Array([72, 101, 108, 108, 111]).buffer; // Используем .buffer для получения ArrayBuffer
    const result = await json(data);
    expect(result).toBe('Hello'); // Проверка, что результат соответствует ожидаемому
  });

  test('Обработка неправильного входного типа', async () => {
    // проверяем, что вернётся пустая строка
    const result = await json('не правильный тип данных');
    expect(result).toBe('');
  });

  test('Обработка пустого ArrayBuffer', async () => {
    const data = new Uint16Array([]).buffer;
    const result = await json(data);
    expect(result).toBe('');
  });
});
