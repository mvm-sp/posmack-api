const request = require('supertest')
const app =require('../server')

/*
afterAll(async () => {
  await app.db.close();
});
*/

describe('Post Tutorial', () => {
  test('Tutorial POST', async () => {
    const res = await request(app)
      .post('/api/tutorials')
      .send({
        "title": "test tutorial",
        "description":"this is the test tutorial"
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('id')
  })
})


describe('Gett All Tutorial', () => {
  test('should create a new post', async () => {
    const res = await request(app)
      .get('/api/tutorials')
      .send()
    expect(res.statusCode).toEqual(200)
  })
})