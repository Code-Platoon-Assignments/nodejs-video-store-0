// store.test.js
import createStore from '../src/store.js'

test('createStore() new store has customers and videos arrays', () => {
    const newStore = createStore();
    expect(newStore.customers.length).toBe(0);
    expect(newStore.videos.length).toBe(0);
})