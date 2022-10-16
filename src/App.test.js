import { makeServer } from './miragejs/server';

describe('App', () => {
  let server;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  test('should first', () => {
    const users = server.createList('user', 10);
    console.log(JSON.parse(JSON.stringify(users)));
  });
});
