function manualAssign(target, ...sources) {
    if (typeof target !== 'object' || target === null) {
        throw new Error("Target must be an object.");
    }

    for (let source of sources) {
        if (source && typeof source === 'object') {
            for (let key in source) {
                if (source.hasOwnProperty(key)) {
                    target[key] = source[key];
                }
            }
        }
    }

    return target;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };

const result = manualAssign({}, obj1, obj2, obj3);
console.log(result); 
const updated = manualAssign({ x: 10 }, { x: 20, y: 30 });
console.log(updated); 
