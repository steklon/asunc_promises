import GameSavingLoader from '../GameSavingLoader';
import reader from '../reader';
import json from '../parser';

afterEach(() => jest.resetModules()); // Сбрасываем модули после каждого теста

// Мокаем read для теста обработки ошибки
jest.mock('../reader', () =>
  jest.fn().mockImplementationOnce(() => Promise.reject(new Error('ошибка загрузки')))
);

test('Проверяем, что выбрасывается ошибка', async () => {
  await expect(GameSavingLoader.load()).rejects.toThrow(new Error('ошибка загрузки'));
});

// Возвращаем нормальную реализацию для reader, чтобы 
// не мешать следующему тесту. Но также необходимо мокаить parser.
jest.mock('../parser');

test('Проверяем, что результат совпадает с ожидаемым', async () => {
  const expectedResult = {
    "id": 9,
    "created": 1546300800,
    "userInfo": { 
      "id": 1, 
      "name": 'Hitman', 
      "level": 10, 
      "points": 2000 
    },
  };

  // Мокируем json, чтобы он возвращал ожидаемый результат
  json.mockImplementationOnce(() => Promise.resolve(JSON.stringify(expectedResult)));

  // Меняем реализацию read, чтобы он возвращал данные
  reader.mockImplementationOnce(() => Promise.resolve('fake data'));

  const response = await GameSavingLoader.load();
  expect(response).toEqual(expectedResult);
});

