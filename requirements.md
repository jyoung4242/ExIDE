# ExcaliburJS WYSIWYG Editor — Requirements Specification

**Stack:** ElectronJS, plain TypeScript (no frameworks), Vite

## 1. Editor Layout / Viewport

### Grid/Dock Layout

- Resizable splitters between panels, per-project state persistence.

### Tabs in Viewport

- **Scene Viewer:** Excalibur canvas object, supports zoom/pan.
- **Script Editor:** Off-the-shelf code editor (TypeScript).
- **Tilemap Editor:** Supports zoom/pan.

### Splitter Behavior

- Resizable, minimum panel sizes enforced. Docking/floating windows not supported.

### Tab State Persistence

- Each project remembers the last active tab on open.

## 2. Project Viewer

### File Management

- Supports drag-and-drop imports.
- Displays all scripts, scenes, and assets.
- Unsupported file types: flagged as faults and ignored.

### File Handling

- Imported files are copied into the project directory.

### Project Configuration

- Stored in `config.json` inside the project folder.
- Settings include Display Mode, Canvas Size, Default Scene, Physics Configuration, Input Mapping.

## 3. Scene Navigation

### Scenes

- Flat list (no nesting), only one active scene at a time.

### Scene Elements (Actors, Cameras, Tilemaps, UI, Particles, etc.)

- Draggable within and between scenes.
- Multi-select supported.
- Prompt for copy or move when dragging between scenes.
- Elements retain references to dependencies (e.g., sprites).
- **Auto-save:** Reordering elements triggers scene JSON auto-save.
- **Add/Remove:** Toolbar buttons or “+ / –” icons; no right-click context menus.

## 4. Asset & Console Container (Bottom Panel)

Tabbed Container with at least two tabs:

Assets

Folder-based asset organization (user-managed).

Drag-and-drop import into /assets.

Sprite sheets with manual metadata.

Animation previews playable in-editor.

Metadata stored in separate JSON.

Deletion warns if asset in use.

Asset search/tagging not supported for MVP.

Optional previews: image thumbnails, audio playback, font samples.

Console

Displays build/run logs, warnings, and errors.

Behaves like VSCode output panel.

Appears automatically on build/run if errors or warnings occur.

Expandable in future for additional tabs (e.g., Search, Profiler, Debugger).

## 5. Inspector

### Properties Panel

- Displays properties of selected scene object.

### Editable Live

- Changes update the scene immediately.

### Undo/Redo

- Supported for property changes.

### Multiple Selection

- Not supported; only single object selected at a time.

## 6. Run / Build

### Build Process

- Generates project in `/output` folder on each run.
- Copies scripts, assets, sprite sheet metadata, and scenes.
- Auto-saves unsaved scripts and scenes before build/run.

### Execution

- Runs project via NodeJS in a browser window.

### Error Reporting

- Build errors/warnings displayed in-editor (implementation TBD).

### Build Modes

- Supports separate Debug and Release builds.

## 7. General / Project Behavior

### Per-Project Settings

- Splitter sizes and panel positions saved per project.

### Keyboard Shortcuts

- Not supported for MVP.

### External Editing

- Not supported (editor does not auto-detect external changes).

## 8. App Default State (No Project Open)

On Startup:

Modal popup opens automatically.

Options inside modal:

Load Last Project (auto-selected if available).

List All Available Projects (shows project directories with metadata/config JSON).

Create New Project (prompts for name + directory).

Behavior:

If user cancels, app stays idle with disabled editor sections.

Modal can be reopened from File > Open Project menu at any time.

Persistence:

Last opened project path saved in global config.

If project folder is missing/corrupt → gracefully fall back to project list modal.

## 9. Project Directory Structure

```bash
MyExcaliburProject/
├─ config.json                 # Project-wide settings
├─ scenes/
│  ├─ MainScene.json
│  ├─ Level2.json
│  └─ ...
├─ scripts/
│  ├─ Player.ts
│  ├─ Enemy.ts
│  └─ ...
├─ assets/
│  ├─ images/
│  │  ├─ player.png
│  │  ├─ player.json           # Sprite sheet metadata
│  │  ├─ tiles/
│  │  │  ├─ grass.png
│  │  │  └─ water.png
│  │  └─ ...
│  ├─ audio/
│  │  ├─ music/
│  │  │  └─ bgm_theme.mp3
│  │  └─ sfx/
│  │     └─ jump.wav
│  ├─ fonts/
│  │  └─ arcade_font.ttf
│  └─ ...
├─ output/                     # Build/run output directory
│  ├─ index.html
│  ├─ main.js
│  ├─ assets/                  # Copied assets + metadata
│  └─ ...
└─ ...

```

10. Color Themes

Modes:

Global default theme (set at the app level).

Project-specific overrides (stored in config.json).

Theme Structure (tiers of colors):

Primary → Used for main UI accents (buttons, tab highlights, active selections).

Secondary → Used for panel headers, hover states, and less prominent accents.

Tertiary → Used for background gradients, dividers, and optional highlights.

Dark Mode Defaults (built-in):

Background: #1e1e1e (editor canvas/panels).

Primary: #007acc (tabs, active state).

Secondary: #3c3c3c (splitters, headers).

Tertiary: #252526 (sub-panels, inactive states).

Text: #d4d4d4 (default font color).

Customization:

User can open Project Settings → Appearance Tab to change theme colors.

Each color tier uses a color picker (RGB/Hex input).

Reset-to-default option included.

Persistence:

Saved in project’s config.json under "theme".

Example:

{ "theme": { "primary": "#007acc", "secondary": "#3c3c3c", "tertiary": "#252526", "darkMode": true } }

Scope:

Theme applies instantly across all panels when changed.
