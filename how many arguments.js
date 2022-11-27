// args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4

let args_count = (...args) => args.length
// Create a function called args_count that returns the number of arguments provided