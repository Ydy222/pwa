// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import todoReducer from '../thunk/todoSlice';

// Redux Persist 설정
const persistConfig = {
    key: 'root',
    storage,
};
// 여러 리듀서를 결합
const rootReducer = combineReducers({
    todos: todoReducer,
});

// Persisted Reducer 생성
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store 생성
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Redux Persist 관련 직렬화 검사 비활성화
        }),
});

// Persistor 생성
export const persistor = persistStore(store);
