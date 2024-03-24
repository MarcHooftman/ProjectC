function getApiUrl() {
    return process.env.REACT_APP_LOCAL_API == "true"
        ? "https://localhost:7185/api"
        : "https://8999-2a02-a212-92c8-8400-4c55-337-fce3-2be2.ngrok-free.app/api"
}

export { getApiUrl };