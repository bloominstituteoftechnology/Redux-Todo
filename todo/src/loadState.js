export const loadState = () => {
    try{
        const serialiedState = localStorage.getItem('state')
        if (serialiedState === null)
            return undefined
        return JSON.parse(serialiedState)
    }
    catch(err) {
        return undefined
    }
}

export const saveState = (state) => {
    try{
        const serialiedState = JSON.stringify(state)
        localStorage.setItem('state', serialiedState)
    }catch(err){
        console.warn(`there was an error while saving to localstorage`);
        
    }
}