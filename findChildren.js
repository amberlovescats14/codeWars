const findChildren = (santasList, children) => {
    let result = []
    children.forEach(child => {
        if(santasList.includes(child))
            if(!result.includes(child)) result.push(child)
    })
    return result
}