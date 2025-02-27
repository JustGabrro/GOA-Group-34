function wave(people) {
    let result = [];
    for (let i = 0; i < people.length; i++) {
        if (people[i] !== " ") {
            result.push(people.slice(0, i) + people[i].toUpperCase() + people.slice(i + 1));
        }
    }
    return result;
}
