function getApiUrl() {
    return process.env.REACT_APP_LOCAL_API == "true"
        ? "https://localhost:7185/api"
        : "https://d06a-2a02-a212-92c8-8400-fc7c-2abb-3c3d-d632.ngrok-free.app/api"
}

export { getApiUrl };