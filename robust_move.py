import os
import shutil

root = r"c:\Users\Agaru\OneDrive\Documents\visual studio 1\Portfolio"
src = os.path.join(root, "photos")
dst_parent = os.path.join(root, "public")
dst = os.path.join(dst_parent, "photos")

if not os.path.exists(dst_parent):
    os.makedirs(dst_parent)

if os.path.exists(src):
    try:
        os.rename(src, dst)
        print(f"Successfully renamed {src} to {dst}")
    except Exception as e:
        print(f"Rename failed: {e}. Trying shutil.move")
        try:
            shutil.move(src, dst)
            print(f"Successfully moved {src} to {dst}")
        except Exception as e2:
            print(f"Move failed: {e2}")
else:
    print(f"Source {src} not found")
