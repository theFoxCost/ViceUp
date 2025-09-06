import os

# Use the directory where this script is located
folder_path = os.path.dirname(os.path.abspath(__file__))

# List all files in the directory
files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]

# Rename files
for i, filename in enumerate(files, start=1):
    ext = os.path.splitext(filename)[1]  # keep original extension
    new_name = f"pic{i}{ext}"
    old_path = os.path.join(folder_path, filename)
    new_path = os.path.join(folder_path, new_name)
    os.rename(old_path, new_path)
    print(f"{filename} -> {new_name}")

print("All files renamed in the same directory as the script!")
