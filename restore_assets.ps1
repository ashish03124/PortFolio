$srcM = "C:\Users\Agaru\.gemini\antigravity\brain\a973086f-be64-42b2-aafc-d1b75e20f1c8\japanese_scenery_sumie_1773485328525.png"
$srcS = "C:\Users\Agaru\.gemini\antigravity\brain\a973086f-be64-42b2-aafc-d1b75e20f1c8\samurai_stencil_silhouette_1773485343013.png"
$destDir = "c:\Users\Agaru\OneDrive\Documents\visual studio 1\Portfolio\public\photos"

if (!(Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
}

Copy-Item -Path $srcM -Destination "$destDir\mountains.png" -Force
Copy-Item -Path $srcS -Destination "$destDir\samurai.png" -Force

Write-Host "Assets restored successfully."
