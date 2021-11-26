const app = require('../../src/app');
const supertest = require('supertest');

describe('Testes da rota principal', () => {
    it('deve retornar status 200 quando chama a rota principal /', async () => {
        const response = await supertest(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('status');
        expect(response.body).toHaveProperty('mensagem');
        expect(response.body.status).toBe('ok');
    });

    it('deve retornar status 200 quando chama a rota /teste', async () => {
        const response = await supertest(app).get('/teste');
        expect(response.status).toBe(200);
    });
})