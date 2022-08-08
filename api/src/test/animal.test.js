import request from 'supertest';
import app from '../app';
import jest from 'jest';
import { connectDB } from '../database';
import mongoose from 'mongoose';

describe('the routes from the api', () => {
    beforeAll((done) => {
        done();
    });

    afterAll((done) => {
        // close the DB connection.
        mongoose.connection.close();
        done();
    });

    //getAnimals
    test('responds to GET /animals', async () => {
        try {
            await connectDB();
            const res = await request(app)
                .get('/animals')
            expect(res.header['content-type']).toBe(
                'application/json; charset=utf-8'
            );
            expect(res.statusCode).toBe(200);
            expect(res.body.page).toEqual(1);
            expect(res.body.rowsPerPage).toEqual(20);
            expect(res.body.rows.length <= 20).toEqual(true);
        } catch (e) {
            expect(e).toMatch('error');
        }
    });

    //getAnimalSearch
    test('responds to /animal/:id GET', async () => {
        try {
            await connectDB();
            const res = await request(app)
                .get('/animal/62cdc16ef0c9da5a2db3a108')
                .send();
            expect(res.header['content-type']).toBe(
                'application/json; charset=utf-8'
            );
            expect(res.statusCode).toBe(200);
            expect(res.body._id).toEqual('62cdc16ef0c9da5a2db3a108');
        } catch (e) {
            expect(e).toMatch('error');
        }
    });

    //getAnimalById
    test('responds to /animal:id', async () => {
        try {
            await connectDB();
            const res = await request(app)
                .get('/animal/62cdc16ef0c9da5a2db3a108')
                .send();
            expect(res.header['content-type']).toBe(
                'application/json; charset=utf-8'
            );
            expect(res.statusCode).toBe(200);
            expect(res.body._id).toEqual('62cdc16ef0c9da5a2db3a108');
        } catch (e) {
            expect(e).toMatch('error');
        }
    });

});