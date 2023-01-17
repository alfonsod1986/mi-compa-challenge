provider "helm" {
    kubernetes {
        config_path    = "~/.kube/config"
        config_context = "minikube"
    }
}

resource "helm_release" "xmen" {
  create_namespace  = true

  name              = var.helm_release_name
  chart             = "../helm-charts/xmen-api"
  namespace         = var.helm_chart_namespace
  version           = var.helm_chart_version
  wait              = true
  timeout           = 900
  dependency_update = true

  values            = [data.template_file.values.rendered]
}

data "template_file" "values" {
  template = file("${path.module}/templates/values.yaml")

  vars = {
    version                       = var.helm_chart_version
    release_name                  = var.helm_release_name
    namespace                     = var.helm_chart_namespace
    ## Backend
    backend_image_repository      = var.helm_backend_image_repository
    backend_image_tag             = var.helm_backend_image_tag
    backend_healthcheck_path      = var.helm_backend_healthcheck_path
    backend_env_port              = var.helm_backend_env_port
    backend_env_mongo_url         = var.helm_backend_env_mongo_url
  }
}

