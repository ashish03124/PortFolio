import os
import shutil

def cleanup():
    # File to delete
    files_to_delete = [
        "git_init.py",
        "get_repos.py",
        "postcss.config.cjs",
        "process_cursor.py" # Just in case it reappeared
    ]
    
    # Directory to delete
    dirs_to_delete = ["dist"]
    
    cwd = r"c:\Users\Agaru\OneDrive\Documents\visual studio 1\Portfolio"
    
    for f in files_to_delete:
        path = os.path.join(cwd, f)
        if os.path.exists(path):
            try:
                os.remove(path)
                print(f"Deleted file: {f}")
            except Exception as e:
                print(f"Error deleting file {f}: {e}")
                
    for d in dirs_to_delete:
        path = os.path.join(cwd, d)
        if os.path.exists(path):
            try:
                shutil.rmtree(path)
                print(f"Deleted directory: {d}")
            except Exception as e:
                print(f"Error deleting directory {d}: {e}")

if __name__ == "__main__":
    cleanup()
