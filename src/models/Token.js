const keyToken = "token"

export function setToken(token) {
    localStorage.setItem(keyToken,token)
}

export function getToken() {
    return localStorage.getItem(keyToken)
}

export function removeToken() {
    localStorage.removeItem(keyToken)
}