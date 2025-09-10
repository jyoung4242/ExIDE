# ExIDE — ExcaliburJS WYSIWYG Editor

A modern, extensible WYSIWYG editor for ExcaliburJS projects, built with Electron, TypeScript, and Vite.

## Features

- **Editor Layout / Viewport**

  - Resizable splitters between panels
  - Tabbed interface: Scene Viewer, Script Editor, Tilemap Editor
  - Per-project state persistence (splitter sizes, last active tab)

- **Project Viewer**

  - Drag-and-drop file import
  - Displays all scripts, scenes, and assets
  - Unsupported file types flagged and ignored
  - Project configuration stored in `config.json`

- **Scene Navigation**

  - Flat scene list, one active scene at a time
  - Drag-and-drop scene elements (Actors, Cameras, Tilemaps, UI, Particles, etc.)
  - Multi-select and move/copy between scenes
  - Auto-save on reordering
  - Add/Remove via toolbar buttons

- **Asset & Graphic Management**

  - User-managed folder structure
  - Drag-and-drop import to `/assets`
  - Sprite sheet support with manual frame/animation definition
  - Animation preview and metadata stored alongside images
  - Asset deletion warns if in use
  - Optional preview for images, audio, fonts

- **Inspector**

  - Properties panel for selected scene object
  - Live editing with undo/redo
  - Single selection at a time

- **Run / Build**

  - Generates `/output` folder on each run
  - Copies scripts, assets, sprite metadata, and scenes
  - Auto-saves before build/run
  - Runs project via NodeJS in a browser window
  - Build errors/warnings displayed in-editor
  - Debug and Release build modes

- **General**
  - Per-project settings for layout
  - No keyboard shortcuts or external editing (MVP)

## Stack

- ElectronJS
- TypeScript (no frameworks)
- Vite

## Requirements

See [`requirements.md`](./requirements.md) for the full specification.

## Getting Started

1. Clone the repository:
   ```sh
   git clone https://github.com/jyoung4242/ExIDE.git
   cd ExIDE
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the app:
   ```sh
   npm run dev
   ```

## License

MIT License
