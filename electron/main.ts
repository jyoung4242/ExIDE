import { app, BrowserWindow } from "electron";
import path from "path";

let mainWindow: BrowserWindow | null = null;

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // compiled JS path
    },
  });

  if (process.env.NODE_ENV === "development") {
    await mainWindow.loadURL("http://localhost:5173");
  } else {
    // Production: load built Vite index.html
    await mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
  }
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
