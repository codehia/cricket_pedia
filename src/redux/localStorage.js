export const loadState = () => {
    return JSON.parse(localStorage.getItem('state'))
}

export const saveState = state => {
    localStorage.setItem('state', JSON.stringify(state));
}