export function getItemLocalStorage(key:string) {
    if (!key) return;
    if (typeof window !== 'undefined') {
        if(localStorage.getItem(key) === null) return null;
        return JSON.parse(localStorage.getItem(key));
    }
}

export function saveItemLocalStorage(key:string, data:any) {
    if (!key) return;
    if (typeof window !== 'undefined') {
        return localStorage.setItem(key, JSON.stringify(data))
    }

}

export function clearItemLocalStorage(key:string) {
    if (!key) return;
    if (typeof window !== 'undefined') {
        if (getItemLocalStorage(key) !== null) {
            return localStorage.removeItem(key)
        }
    }
    return;
}