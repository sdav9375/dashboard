project = "dashboard"

runner {
  enabled = true

  data_source "git" {
    url  = "https://github.com/sdav9375/dashboard.git"
  }
}

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
