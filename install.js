module.exports = {
  requires: {
    bundle: "ai",
  },
  run: [
    {
      when: "{{exists('app/env')}}",
      method: "fs.rm",
      params: {
        path: "app/env"
      }
    },
    {
      when: "{{!exists('app')}}",
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/jhj0517/Whisper-WebUI app",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv_python: "3.11",
        venv: "venv",
        path: "app",
        message: [
          "uv pip install -r ../requirements.txt --build-constraints ../build-constraints.txt"
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "venv",
          path: "app",
        }
      }
    }
  ]
}
