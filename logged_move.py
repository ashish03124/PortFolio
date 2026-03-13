import os
import shutil

root = r"c:\Users\Agaru\OneDrive\Documents\visual studio 1\Portfolio"
src = os.path.join(root, "photos")
dst_parent = os.path.join(root, "public")
dst = os.path.join(dst_parent, "photos")
log_file = os.path.join(root, "move_log.txt")

with open(log_file, "w") as log:
    log.write(f"Starting move process\n")
    log.write(f"Source: {src}\n")
    log.write(f"Destination: {dst}\n")

    if not os.path.exists(dst_parent):
        os.makedirs(dst_parent)
        log.write(f"Created parent dst: {dst_parent}\n")

    if os.path.exists(src):
        try:
            if os.path.exists(dst):
                shutil.rmtree(dst)
                log.write(f"Removed existing dst: {dst}\n")
            
            shutil.copytree(src, dst)
            log.write(f"Successfully copied {src} to {dst}\n")
            
            # Verify copy
            files_in_src = len(os.listdir(src))
            files_in_dst = len(os.listdir(dst))
            log.write(f"Files in src: {files_in_src}, Files in dst: {files_in_dst}\n")
            
            if files_in_src == files_in_dst:
                shutil.rmtree(src)
                log.write(f"Successfully deleted {src}\n")
            else:
                log.write(f"Count mismatch! Not deleting src.\n")
        except Exception as e:
            log.write(f"Error: {e}\n")
    else:
        log.write(f"Source not found\n")
