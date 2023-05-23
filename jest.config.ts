import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  transform: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      {
        presets: ['next/babel'],
        plugins: ['@babel/plugin-proposal-private-methods'],
      },
    ],
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    // Gerencia imports de CSS (com modulos CSS)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Gerencia imports de CSS (com modulos CSS)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    // Gerencia imports de imagens
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$': `<rootDir>/__mocks__/fileMock.js`,

    // Gerencia aliases de módulos
    '^@components/(.*)$': '<rootDir>/src/components/$1',

    '^@contexts/(.*)$': '<rootDir>/src/contexts/$1',

    '^@features/(.*)$': '<rootDir>/src/features/$1',

    '^@app/(.*)$': '<rootDir>/src/app/$1',

    '^@screens/(.*)$': '<rootDir>/src/screens/$1',

    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',

    '^@src/(.*)$': '<rootDir>/src/$1',
  },
}

export default config
