"use strict";

var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };

Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
let mainWindow = null;

async function createWindow() {
  mainWindow = new electron_1.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path_1.default.join(__dirname, "preload.js"), // compiled JS path
    },
  });
  if (process.env.NODE_ENV === "development") {
    await mainWindow.loadURL("http://localhost:5173");
  } else {
    // Production: load built Vite index.html
    await mainWindow.loadFile(path_1.default.join(__dirname, "../dist/index.html"));
  }
}

electron_1.app.on("ready", createWindow);
electron_1.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") electron_1.app.quit();
});
