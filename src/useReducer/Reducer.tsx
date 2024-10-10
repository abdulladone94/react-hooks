import { useReducer } from 'react';

interface IState {
  count: number;
  error: string | null;
}
interface IAction {
  type: 'increment' | 'decrement';
}

const reducer = (state: IState, action: IAction) => {
  const { type } = action;
  switch (type) {
    case 'increment': {
      const newCount = state.count + 1;
      const isError = state.count > 4;
      return {
        ...state,
        count: isError ? state.count : newCount,
        error: isError ? 'maximum reached' : null,
      };
    }
    case 'decrement': {
      const newCount = state.count - 1;
      const isError = state.count < 2;
      return {
        ...state,
        count: isError ? state.count : newCount,
        error: isError ? 'not allowed less than 0' : null,
      };
    }
    default:
      return state;
  }
};

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-10">
      <h1 className="text-lg font-semibold">Count: {state.count}</h1>
      {state.error && <div className="mb-2 text-red-500">{state.error}</div>}
      <div className="flex justify-center items-center gap-3">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition"
          onClick={() => dispatch({ type: 'increment' })}
        >
          Increment
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition"
          onClick={() => dispatch({ type: 'decrement' })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default ReducerHook;
