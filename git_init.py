import subprocess
import os

def run_git_commands():
    cwd = r"c:\Users\Agaru\OneDrive\Documents\visual studio 1\Portfolio"
    commands = [
        ["git", "init"],
        ["git", "add", "."],
        ["git", "commit", "-m", "Initial commit: Data Science Hashira Portfolio"],
        ["git", "branch", "-M", "main"],
        ["git", "remote", "add", "origin", "https://github.com/ashish03124/PortFolio.git"]
    ]
    
    for cmd in commands:
        print(f"Running: {' '.join(cmd)}")
        result = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True)
        print(f"STDOUT: {result.stdout}")
        print(f"STDERR: {result.stderr}")
        if result.returncode != 0 and "already exists" not in result.stderr:
            print(f"Failed at: {' '.join(cmd)}")
            # Don't break if remote exists

if __name__ == "__main__":
    run_git_commands()
