function sortIt(str, n) {
    return str.split(', ')
        .sort((a, b) => {
            let charA = a[n - 1].toLowerCase();
            let charB = b[n - 1].toLowerCase();
            return charA === charB ? a.localeCompare(b, 'en', { sensitivity: 'base' }) : charA.localeCompare(charB);
        })
        .join(', ');
}
