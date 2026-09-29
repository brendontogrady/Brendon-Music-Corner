# Brendon Music Tracker

Static website with four music sections: most listened to artists, albums, songs, and the full listening archive. Rankings include counted plays of at least 30 seconds. The public archive contains 8,057 unique song/artist entries and the most frequently played album for each song. Repeated listens and alternate releases are consolidated.

The published data contains no listening dates, times, playback endings, sessions, genres, or private spreadsheet analyses. Profiles show catalog information, rankings, and service search links.

The concert archive contains 17 events and 43 videos. Search or filter by band and venue, then open an event to view its lineup and videos. Individual video performers are unassigned. Recording times, filenames, clip titles, and band listening counts are not displayed.

## Update the existing GitHub Pages site

Extract the ZIP. Copy its contents into your existing Brendon-Music-Corner repository folder, replacing index.html, styles.css, app.js, data.json, README.md, and the concerts folder files. Keep the existing repository folder and its Git configuration. In GitHub Desktop, commit the changes, then click Push origin. Your current website address stays the same; the visible site name is now Brendon Music Tracker.

This package includes the concert media, so no separate media download is needed. The private Apple Music spreadsheet is not included.

## Local preview

Use a local HTTP server since the music page loads data.json. For example, run `python -m http.server 8000` in this folder and open http://localhost:8000.

Ranking tables show the top 100 artists, top 100 albums, and top 500 songs. Search and sorting operate within each ranking limit. Full catalog and profile data remain available. The listening archive shuffles once per page load and retains that order during searching and pagination unless a column is sorted. Play random song selects from the full catalog and opens a song profile with listening-service links.

Hellfest 2026 venue: Carteret Performing Arts and Events Center. February 4, 2026 headliners: Outta Pocket / Fools Game.
