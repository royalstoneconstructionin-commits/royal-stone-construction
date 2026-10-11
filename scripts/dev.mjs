import { spawn } from "node:child_process";
import { readFileSync, writeFileSync, unlinkSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const workspace = fileURLToPath(new URL("../", import.meta.url));
const lockPath = fileURLToPath(new URL("../.next-dev.lock", import.meta.url));

function acquireLock() {
  try {
    writeFileSync(lockPath, String(process.pid), { flag: "wx" });
  } catch (error) {
    if (error.code !== "EEXIST") throw error;
    const owner = Number(readFileSync(lockPath, "utf8"));
    if (!Number.isSafeInteger(owner) || owner <= 0) {
      throw new Error("Invalid .next-dev.lock. Stop the old dev server before removing this lock.");
    }
    try {
      process.kill(owner, 0);
    } catch (checkError) {
      if (checkError.code === "ESRCH") {
        unlinkSync(lockPath);
        return acquireLock();
      }
      if (checkError.code !== "EPERM") throw checkError;
    }
    throw new Error("A development server is already running for this project. Use its existing URL or stop it with Ctrl+C before running npm run dev again.");
  }
}

try { acquireLock(); }
catch (error) { console.error(error.message); process.exit(1); }

function releaseLock() {
  try {
    if (readFileSync(lockPath, "utf8") === String(process.pid)) unlinkSync(lockPath);
  } catch (error) { if (error.code !== "ENOENT") console.error("Could not release the dev server lock:", error.message); }
}

const child = spawn(process.execPath, [require.resolve("next/dist/bin/next"), "dev", ...process.argv.slice(2)], { cwd: workspace, stdio: "inherit" });
process.on("exit", releaseLock);
let stopping = false;
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => {
  if (stopping) return;
  stopping = true;
  // Windows does not propagate child.kill() to Next.js's server subprocess.
  if (process.platform === "win32") {
    spawn("taskkill", ["/pid", String(child.pid), "/t", "/f"], { windowsHide: true, stdio: "ignore" });
  } else child.kill(signal);
});
child.on("error", error => { console.error(error.message); process.exit(1); });
child.on("exit", code => { process.exit(code ?? 0); });
