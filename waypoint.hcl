project = "dashboard"
app "dashboard-app" {
  build {
    use "docker" {
    }
    registry {
      use "docker" {
        image = "sdav9375/dashboard:latest"
        tag   = "latest"
      }
    }
  }
  deploy {
    use "docker" {
      //The following field was skipped during file generation
      client_config = ""
    }
  }
}
