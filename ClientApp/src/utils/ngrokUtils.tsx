async function getNgrokTunnels() {
    try {
        const response = await fetch('http://localhost:4040/api/tunnels');
        const data = await response.json();
        const tunnels = data.tunnels;

        for (const tunnel of tunnels) {
            console.log(`Name: ${tunnel.name}, URL: ${tunnel.public_url}`);
        }
    } catch (error) {
        console.error(`Error getting ngrok tunnels: ${error}`);
    }
}

export { getNgrokTunnels }