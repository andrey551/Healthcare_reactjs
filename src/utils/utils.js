export const parseTime = (time) => {
    let ret = Number(time.slice(0, 2))
    if(ret < 12) return time.slice(0, 5) + " AM"
    else return ret-12 + time.slice(2, 5) + " PM"
}

export const roundFLoat = (value) => {
    return Number(value.toFixed(1))
}