const request = require('supertest')
const app = require('../../server')

describe('Get Github Repositories', () => {
  it('should get all repo sorted by stars', async () => {
    const res = await request(app).get('/search/repository-by-stars')
    expect(res.statusCode).toEqual(200)
  })
  it('should get all repo sorted by stars', async () => {
    const res = await request(app)
      .get('/search/repositories')
      .query({ limit: 10 })
    expect(res.statusCode).toEqual(200)
  })
})
