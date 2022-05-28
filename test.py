def create_phone_number(n):
    x = 0
    o = 0
    for l in n:
        if l == "x":
            x += 1
        elif l == "o":
            o += 1
    return (x == o) 

print(create_phone_number(""))