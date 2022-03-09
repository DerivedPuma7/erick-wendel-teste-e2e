import { jest, expect, test, describe } from '@jest/globals';
import superTest from 'supertest';
// import Server from '../../src/server.js';
import { server1 as Server1, server2 as Server2 } from '../../src/server.js'

/*
DESAFIO PARA QUEM ASSISTIU:
Fazer com que Rodar o POST primeiro, não suge o GET
https://youtu.be/hQB139HP3GE
*/

describe('API E2E Test Suite', () => {
    test('POST / - should save an item and return ok', async () => {
        const response = await superTest(Server1)
        .post('/')
        .send({
            nome: 'erick Wendel',
            age: 27
        });

        const expectedResponse = {ok: 1};

        expect(JSON.parse(response.text)).toStrictEqual(expectedResponse);
    })

    test('GET / - should return an array', async () => {
        const response = await superTest(Server2).get('/');

        const data = JSON.parse(response.text);

        expect(data).toBeInstanceOf(Array)
        expect(data.length).toEqual(0)
    });

    test('DELETE / - should save an item and return ok', async () => {
        const response = await superTest(Server1).delete('/')

        const expectedResponse = {ok: 1};

        expect(JSON.parse(response.text)).toStrictEqual(expectedResponse);
    })
})