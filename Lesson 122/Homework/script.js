function bouncingBall(h, bounce, window) {
    if (h <= window || !(bounce > 0 && bounce < 1)) {
        return -1;
    }
    let count = 0;
    while (h > window) {
        count++;
        h *= bounce;
        if (h > window) {
            count++;
        }
    }
    return count;
}
