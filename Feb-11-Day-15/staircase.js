function staircase(n) {
    let char = "#"
    let space = " "
    for(let i=1; i<=n; i++){
        console.log(space.repeat(n-i)+char.repeat(i))
    }
