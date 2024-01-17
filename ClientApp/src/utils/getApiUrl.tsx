function getApiUrl() {
    return process.env.REACT_APP_LOCAL_API == "true"
        ? "https://localhost:7185/api"
        : "https://9fdf-2a02-a212-92c8-8400-1d71-9cfc-d50d-d6d.ngrok-free.app"
}

export { getApiUrl };