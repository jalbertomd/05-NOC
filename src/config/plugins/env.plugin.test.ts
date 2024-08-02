import { envs } from './env.plugin';

describe('env.plugin.ts', () => {

    test('should return env options', () => {

        expect(envs).toEqual({
            PORT: 3000,
            MAILER_SERVICE: 'gmail',
            MAILER_EMAIL: 'j.alberto.martinez.d@gmail.com',
            MAILER_SECRET_KEY: 'xpshbfxyyyocrxoj',
            PROD: false,
            MONGO_URL: 'mongodb://jalbertomd:123456@localhost:27018/',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_USER: 'jalbertomd',
            MONGO_PASS: '123456'
        });
    });

    test('should return error if not found env', async () => {

        jest.resetModules();
        process.env.PORT = 'ABC';

        try {
            await import('./env.plugin');
            expect(true).toBe(false);
        } catch (error) {
            expect(`${error}`).toContain('"PORT" should be a valid integer');
        }
    })
})