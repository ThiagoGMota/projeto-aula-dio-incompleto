module.exports = {
    testEnvironment: 'jsdom', // Use jsdom como ambiente de teste
    preset: 'ts-jest', // Se você estiver usando TypeScript
    transform: {
        '^.+\\.tsx?$': 'ts-jest', // Para transformar arquivos TypeScript
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};