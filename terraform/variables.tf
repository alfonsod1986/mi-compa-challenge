# ------------------------------------------------------------------------------
# HELM RELEASE VARIABLES
# ------------------------------------------------------------------------------
variable "helm_release_name" {
  description = "Specify helm release name to install in a cluster."
  type        = string
  default     = "xmen"
}

variable "helm_chart_version" {
  description = "Chart version to use when release is installed."
  type        = string
  default     = "0.1.0"
}


variable "helm_chart_namespace" {
  description = "Namespace where will be deployed the application."
  type        = string
  default     = "mi-compa"
}

variable "helm_backend_image_repository" {
  description = "The backend's image name."
  type        = string
  default     = "alfonsod18/mi-compa-challenge"
}

variable "helm_backend_image_tag" {
  description = "The backend's image tag."
  type        = string
  default     = "latest"
}

variable "helm_backend_healthcheck_path" {
  description = "The backend's healthcheck path. This value is set in the livenessProbe and readinessProbe."
  type        = string
  default     = "/healthcheck"
}


variable "helm_backend_env_port" {
  description = "The backend's port."
  type        = string
  default     = "8080"
}

variable "helm_backend_env_mongo_url" {
  description = "The backend's env mongo url."
  type        = string
}