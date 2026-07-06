# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, no-build, no-framework English learning app ("English B2-C1 Interactive Lesson Canvas") — a single-page tool with lessons, vocabulary, pronunciation, grammar, listening, flashcards, word-match, sentence-building, and quiz exercises. Everything is client-side; there is no backend, package.json, or build step.

## Files

- `index.html` — all markup, CSS, and UI/interaction logic (tabs, rendering, quiz checking, flashcards, TTS playback, localStorage persistence). This is the only place app *behavior* lives.
- `lessons.js` — all lesson content and data. Loaded via `<script src="lessons.js">` before the inline script block in `index.html`, so its top-level `const`/`function` declarations (e.g. `lessonCatalog`, `getLessonData`, `allItems`) are consumed directly as globals by `index.html`'s script.
- `.vercel/` — Vercel project link (project name `english-learning-study`); no `vercel.json`, no serverless functions currently in the repo.

## Running / previewing

There is no build or install step. Open `index.html` directly in a browser, or serve the folder with any static file server (e.g. `python3 -m http.server`) if you need `location.protocol` to read as `http`/`https` (this affects the TTS fallback — see below). There is no test suite, linter, or CI configured.

Deployment is via Vercel, tied to the GitHub repo `tranvanvu241103-cmd/english-learning-study` on branch `main`.

## Content architecture (lessons.js)

Each lesson is assembled by `createLesson(id, vocabulary)` (lessons.js:904) from several parallel per-lesson banks keyed by lesson id (`"Lesson 1"`, `"Lesson 2"`, ...):

- `lessonInfo[id]` — title, level, goal, output, topics
- vocabulary — either filtered from the shared `baseItems` array (Lessons 1-3) or a dedicated `lessonNItems` array (Lessons 4-12)
- `grammarNotesBank[id]` / `grammarBank[id]` — grammar explanation + practice items
- `listeningBank[id]` — listening/dictation content
- `quizBank[id]` — quiz questions

These are combined into `lessonCatalog` (lessons.js:916), then indexed into `lessonsById`. Accessors (`getLessonData`, `getLessonInfo`, `getLessonListening`, `allItems`) are the intended way to read lesson data — `index.html` calls these rather than reaching into the banks directly. `validateLessonCatalog()` (lessons.js:938) warns in the console if any lesson is missing a section (vocab/grammar/listening/quiz) — check this when adding a new lesson.

**When adding a new lesson**: add entries to `lessonInfo`, a vocabulary source, and the relevant bank(s), then register it via `createLesson(...)` in the `lessonCatalog` array. Run `validateLessonCatalog()` (open the page and check devtools console) to confirm nothing is missing.

Each vocabulary item has a consistent shape: `lesson`, `topic`, `english`, `vi`, `example`, `exampleVi`, `approx` (IPA + Vietnamese-style approximate pronunciation), `explain`, `usage`, `visual` (an emoji, or a key into the `visualMap` in `getVisual()` at index.html:634).

## UI architecture (index.html)

- Single-page, tab-based: `showTab(id, btn)` (index.html:788) toggles `.section.active`/`.tab.active` and calls `refreshSection(id)` (index.html:799) to re-render that section's content on demand — sections aren't all rendered upfront.
- State is a flat set of `let` globals declared in the first inline `<script>` block (index.html:611-629): current lesson/flashcard/match/sentence-builder state. There's no state management library or component model — rendering functions (`render*`) read these globals and rebuild DOM via `innerHTML`.
- Persistence is plain `localStorage`, namespaced with the `english_..._b2c1` prefix: custom user-added vocab (`english_custom_items_b2c1`), free-text notes (`english_notes_b2c1`), lesson progress checklist (`english_progress_b2c1`), and TTS voice/rate preference. `exportData()`/`importData()` (index.html:1300) round-trip `{customItems, notes}` as JSON for backup.
- Text-to-speech has two paths: browser `SpeechSynthesisUtterance` (preferred, with voice picked by `voiceScore()` heuristic favoring US English voices) falling back to `speakOnline()`, which hits `/api/tts?text=...` when served over http(s) or Google Translate's TTS endpoint otherwise (index.html:751). Note there is currently no `/api/tts` implementation in this repo — that endpoint would need a serverless function if relied on in production.
- User-added custom vocabulary items merge with the built-in catalog via `lessonItems()`/`allItems()`, so features like flashcards/quiz/match treat custom and built-in items uniformly per selected lesson.

## Practical notes

- No dependency manifest, no `npm` commands — don't assume Node tooling exists here.
- The repo lives on a OneDrive-synced path when accessed from Windows/WSL (`/mnt/c/Users/vu/OneDrive/Documents/LANGUAGE_STUDY/01-English`); expect occasional CRLF/LF noise in diffs that isn't a real content change.
- Git identity for this repo is set locally (not global).
