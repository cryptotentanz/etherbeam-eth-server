module.exports = {
  roots: ['src'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: ['/node_modules/secp256k1'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(\\.|/)test\\.(j|t)s$',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,ts}', '!src/index.ts'],
}
