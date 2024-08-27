export function getFullYear(){
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    return currentYear;
}

export function getFooterCopy(isIndex){
    if (isIndex){
        return "Holberton School";
    }
    return "Holberton School main dashboard";
}