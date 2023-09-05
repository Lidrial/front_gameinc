import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

// Define a reducer function that will manage the state
const initialState = {
    isLoggedIn: false,
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isLoggedIn: true };
        case 'LOGOUT':
            return { ...state, isLoggedIn: false };
        case 'SET_ROLE':
            return { ...state, role: action.payload };
        case 'SET_TOKEN':
            return { ...state, access_token: action.payload };
        case 'SET_USER_ID':
            return { ...state, user_id: action.payload };
        default:
            return state;
    }
}


const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create the Redux store

const store = createStore(
    persistedReducer,
    composeWithDevTools()
);
const persistor = persistStore(store);

export { store, persistor };
