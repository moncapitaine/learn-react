// tests/setup.ts
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import { mockedServer } from '../mocks/server'
import { fetch } from 'cross-fetch';
global.fetch = fetch

expect.extend(matchers);

beforeAll(() => {
  mockedServer.listen({ onUnhandledRequest: 'error'})
})
afterEach(() => mockedServer.resetHandlers())
afterAll(() => mockedServer.close())