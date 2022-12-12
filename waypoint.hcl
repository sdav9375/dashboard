project = "dashboard"
app "dashboard-app" {
  build {
    use "docker" {
    }
    registry {
      use "docker" {
        image = "sdav9375/dashboard"
        tag   = "latest"
      }
    }
  }
  deploy {
    use "docker" {
    }
  }
}
