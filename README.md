# Brendon Music Corner

Combined static site: interactive Apple Music listening museum at the homepage and concert archive at `concerts/` (17 events, 43 clips).

## Publish with GitHub Desktop
1. Create a repository named `brendon-music-corner` and initialize it with a README.
2. Extract this ZIP and copy its contents into the repository folder. `index.html` must be directly in the repository root.
3. Commit changes to `main`, then Publish repository. For GitHub Free, leave Keep this code private unchecked to use Pages.
4. On GitHub, open repository Settings > Pages. Select Deploy from a branch, branch main, folder / (root), and Save.
5. Open the site URL shown in Pages settings once deployment completes.

Do not upload this ZIP itself or the original Apple Music spreadsheet. The ZIP contains the ready-to-publish files, including compressed concert videos. The public listening dataset excludes City and Device fields, and retains listening timestamps.

## Updates
Replace changed files in this folder, Commit to main, and Push origin in GitHub Desktop. Pages publishes changes automatically.

## Local preview
The music museum fetches data.json. Preview using a local HTTP server; double-clicking index.html will not load the dataset. For example, with Python installed, run `python -m http.server 8000` in this folder and open http://localhost:8000.

Original concert footage uploads are preserved separately. Exact bands within clips are intentionally unassigned.
