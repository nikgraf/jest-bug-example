const NodeEnvironment = require('jest-environment-node')

class MyEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup()
    this.global.someDate = new Date()
  }

  runScript(script) {
    return super.runScript(script)
  }
}

module.exports = MyEnvironment
