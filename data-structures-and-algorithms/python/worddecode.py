def decode(message_file):
    with open(message_file, 'r') as file:
        lines = file.readlines()

    if not lines:
        return "The file is empty."

    num_word_dict = {}
    for line in lines:
        number, word = line.split()
        num_word_dict[int(number)] = word

    def pyramid_numbers(n):
        return [int(i * (i + 1) / 2) for i in range(1, n + 1)]

    max_num = max(num_word_dict.keys())
    pyramid_ends = pyramid_numbers(max_num)

    decoded_message = ' '.join([num_word_dict[num] for num in pyramid_ends if num in num_word_dict])

    return decoded_message

# Example usage
message = decode('message_file.txt')
print(message)
