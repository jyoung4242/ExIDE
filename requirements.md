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

## 4. Asset & Graphic Management

### Folder Structure

- User-managed; no enforced type-based subfolders.

### Import

- Drag-and-drop into `/assets`, copied into project directory.

### Sprite Sheets

- User marks image as a sprite sheet.
- Manual frame definition (width/height, rows/columns or frame count).
- Animation definitions allowed (walk, idle, etc.).
- Animation previews playable in editor.
- Metadata stored in separate JSON file alongside image (e.g., `walk.png` → `walk.json`).

### Deletion

- Warn if asset is used in a scene or script.

### Asset Search/Tagging

- Not supported for MVP.

### Preview Support

- Optional — image thumbnails, audio playback, font sample text.

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
