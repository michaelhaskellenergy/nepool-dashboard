# NEPOOL Meeting Tracker

Static GitHub Pages site for tracking upcoming NEPOOL/ISO-NE committee meetings. Organized by committee with linked materials and AI-generated summaries.

## Usage

Open `index.html` directly in a browser, or serve locally:
```
python -m http.server 8080
```
Then visit `http://localhost:8080`.

## Weekly Workflow

1. Check [iso-ne.com/calendar](https://www.iso-ne.com/calendar/) for upcoming meetings
2. Paste meeting URLs and dates into `data/meetings.js`
3. Transcribe agenda items from posted PDFs
4. Add material links
5. Open in browser to verify
6. Push to GitHub

## Data File: `data/meetings.js`

All content is in `data/meetings.js`. Key fields per agenda item:

| Field | Values | Notes |
|-------|--------|-------|
| `type` | `presentation`, `vote`, `informational`, `procedural` | Drives badge color |
| `maine_relevance` | `high`, `medium`, `low`, `""` | Drives ME badge |
| `summary` | string | Leave `""` until Phase 2 AI script is run |
| `topic_tags` | array of strings | For future topic tracking |

## Committees

**Core 5** (tabs):
- PC — Participants Committee
- MC — Markets Committee
- RC — Reliability Committee
- TC — Transmission Committee
- PAC — Planning Advisory Committee

**Working Groups** (bottom section):
- LFWG — Load Forecasting Working Group
- DGWG — Distributed Generation Working Group

## GitHub Pages Setup

1. Push this repo to GitHub
2. Settings → Pages → Source: main branch, root folder
3. Site will be available at `https://[username].github.io/nepool-tracker/`

## Phases

- **Phase 1** (current): Static site, manual data entry
- **Phase 2**: `scripts/update.ps1` — downloads materials, calls Claude API for summaries
- **Phase 3**: Topic evolution tracking across meetings
