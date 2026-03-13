import os
import shutil

src = r"c:\Users\Agaru\OneDrive\Documents\visual studio 1\Portfolio\photos"
dst = r"c:\Users\Agaru\OneDrive\Documents\visual studio 1\Portfolio\public\photos"

if os.path.exists(src):
    shutil.move(src, dst)
    print("Move successful")
else:
    print("Source folder not found")
