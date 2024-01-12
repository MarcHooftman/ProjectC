function getApiUrl() {
    return process.env.REACT_APP_LOCAL_API == "true"
        ? "https://localhost:7185/api"
        : "https://fff9-2a02-a212-92c8-8400-5935-52f7-c522-7bd1.ngrok-free.app"
}

export { getApiUrl };