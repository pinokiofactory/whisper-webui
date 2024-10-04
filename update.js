module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git pull"
    }
  }, {
    method: "fs.rm",
    params: {
      path: "app/configs/default_parameters.yaml"
    }
  }, {
    method: "shell.run",
    params: {
      path: "app",
      message: "git pull"
    }
  }]
}
