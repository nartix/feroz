def is_staircase(nums):
    col_length = 0
    last_elements = []

    while len(nums) > 0:
        col_length += 1
        column = []

        for i in range(col_length):
            if nums:
                column.append(nums.pop(0))
            else:
                return False

        if column:
            last_elements.append(column[-1])

    return last_elements

def decode(message_file):
    with open(message_file, 'r') as file:
        lines = file.readlines()

    # Parsing the file to create a list of numbers and a dictionary of number-word pairs
    num_word_dict = {}
    nums = []
    for line in lines:
        number, word = line.split()
        num_word_dict[int(number)] = word
        nums.append(int(number))

    # Using is_staircase to find the numbers at the end of each pyramid line
    pyramid_ends = is_staircase(nums)

    # Check if the pyramid_ends is not False
    if not pyramid_ends:
        return "Invalid staircase structure"

    # Constructing the decoded message
    decoded_message = ' '.join([num_word_dict[num] for num in pyramid_ends if num in num_word_dict])

    return decoded_message

# Example usage
message = decode('text.txt')
print(message)
