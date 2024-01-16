def decode(message_file):
    with open(message_file, 'r') as file:
        lines = file.readlines()

    if not lines:
        return "The file is empty."

    num_word_dict = {}
    max_num = 0
    for line in lines:
        number, word = line.split()
        number = int(number)
        num_word_dict[number] = word
        if number > max_num:
            max_num = number

    def pyramid_numbers(n):
        i = 1
        while True:
            pyramid_num = int(i * (i + 1) / 2)
            if pyramid_num > n:
                break
            yield pyramid_num
            i += 1

    decoded_message = ' '.join([num_word_dict[num] for num in pyramid_numbers(max_num) if num in num_word_dict])

    return decoded_message

# Example usage
message = decode('message_file.txt')
print(message)