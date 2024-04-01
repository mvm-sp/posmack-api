const request = require('supertest')
const app =require('../server')

beforeAll(() => {
  server = app.listen(8082); // Random number is needed to avoid using same port in different tests if you run in parallel
})

afterAll(() => {
  server.close()
})

describe('Post Tutorial', () => {

  afterAll(() => {
    server.close()
  })

  it('should create a new post', async () => {
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

/*
describe('Gett All Tutorial', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .get('/api/tutorials')
      .send()
    expect(res.statusCode).toEqual(200)
  })
})*/