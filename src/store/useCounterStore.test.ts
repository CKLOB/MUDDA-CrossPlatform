import { useCounterStore } from '@/store/useCounterStore';

describe('useCounterStore', () => {
  beforeEach(() => {
    useCounterStore.getState().reset();
  });

  it('starts at zero', () => {
    expect(useCounterStore.getState().count).toBe(0);
  });

  it('increments the count', () => {
    useCounterStore.getState().increment();
    expect(useCounterStore.getState().count).toBe(1);
  });

  it('decrements the count', () => {
    useCounterStore.getState().decrement();
    expect(useCounterStore.getState().count).toBe(-1);
  });

  it('resets the count to zero', () => {
    useCounterStore.getState().increment();
    useCounterStore.getState().increment();
    useCounterStore.getState().reset();
    expect(useCounterStore.getState().count).toBe(0);
  });
});
