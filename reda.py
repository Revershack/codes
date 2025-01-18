from colorama import init, Fore
import time 


# Initialize colorama
init()

# Function to print text letter by letter in green
def print_text_in_green(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            text = file.read()
            for char in text:
                print(Fore.GREEN + char, end='', flush=True)
                time.sleep(0.05)
    except FileNotFoundError:
        print("File not found. Please check the file path.")

# Example usage
file_path = 'proiect.txt'
print_text_in_green(file_path)
