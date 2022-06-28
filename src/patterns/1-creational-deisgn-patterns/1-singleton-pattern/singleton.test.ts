import { Singleton } from './classic-implementation.js';

test("singleton is a Singleton", () => {
    expect(Singleton.getInstance()).toBe(Singleton.getInstance())
});