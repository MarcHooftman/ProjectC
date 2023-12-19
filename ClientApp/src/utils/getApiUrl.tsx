function getApiUrl() {
    return process.env.REACT_APP_LOCAL_API == "true" ? "https://localhost:7185/api" : "https://5344-2a02-a212-92c8-8400-a99d-7185-f1f5-8289.ngrok-free.app/api"
}

export { getApiUrl };