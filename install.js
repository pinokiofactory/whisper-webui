module.exports = {
  requires: {
    bundle: "ai",
  },
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/jhj0517/Whisper-WebUI app",
        ]
      }
    },
    {
      // Overwrite the upstream requirements.txt, which pins a CUDA-only
      // torch build (--extra-index-url .../cu128), with the CPU-safe
      // version maintained alongside this launcher.
      method: "fs.copy",
      params: {
        src: "requirements.txt",
        dest: "app/requirements.txt"
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          // openai-whisper (git+jhj0517-whisper) uses a legacy setup.py
          // that imports pkg_resources, which newer setuptools no longer
          // ships. Pin an older setuptools and build against it directly.
          "uv pip install setuptools==80.10.2",
          "uv pip install --no-build-isolation -r requirements.txt",
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
        }
      }
    }
  ]
}
