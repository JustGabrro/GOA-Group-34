def series_sum(n):
    if n == 0:
        return "0.00"
    total_sum = sum(1 / (1 + 3 * (k - 1)) for k in range(1, n + 1))
    return f"{total_sum:.2f}"