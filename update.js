module.exports = {
  run: [{
    method: "fs.rm",
    params: {
      path: "app/configs/default_parameters.yaml"
    }
  }, {
    method: "shell.run",
    params: {
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      path: "app",
      message: "git pull"
    }
  }]
}
