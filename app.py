from ast import main
import os

print("Hello World! runs on Actions")
for i in range(10):
    print("XD" * i)

    name = os.getenv("USERNAME")
    print(f"Hello {name}!")

if __name__ == "__main__":
    main()