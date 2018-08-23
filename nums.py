lots_of_numbers = range(-1000, 1000)
the_same_numbers = range(-1000, 1000)
same_numbers = (
    i
    for i, j in zip(lots_of_numbers, the_same_numbers)
    if i is j
)
print(*same_numbers, sep=", ")
