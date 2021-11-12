export function getItemLocalStorage(key) {
    if (!key) return
    if (typeof window !== 'undefined') {
        return localStorage.getItem(JSON.parse(key))
    }
}

export function saveItemLocalStorage(key, data) {
    if (!key) return;
    if (typeof window !== 'undefined') {
        return localStorage.setItem(key, JSON.stringify(data))
    }

}

export function clearItemLocalStorage(key) {
    if (!key) return;
    if (typeof window !== 'undefined') {
        if (getItemLocalStorage(key) !== null) {
            return localStorage.removeItem(key)
        }
    }
    return;
}