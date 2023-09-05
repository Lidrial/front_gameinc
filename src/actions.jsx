export const login = () => ({
    type: 'LOGIN',
});

export const logout = () => ({
    type: 'LOGOUT',
});

export const setRole = (role) => ({
    type: 'SET_ROLE',
    payload: role,
});

export const setToken = (role) => ({
    type: 'SET_TOKEN',
    payload: role,
});

export const setUserId = (user_id) => ({
    type: 'SET_USER_ID',
    payload: user_id,
});
