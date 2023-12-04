import IProfile from '../../interfaces/IProfile';


export async function createProfile(graphData: IGraphData) {
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10);

    const profile: IProfile = {
        fullName: graphData?.givenName + " " + graphData?.surname || "",
        role: graphData?.jobTitle || "",
        memberSince: formattedDate,
        department: graphData?.officeLocation || "",
        email: graphData?.mail || "",
        // user: {
        //     email: graphData?.mail || "",
        // },
    };
    return await fetch("https://localhost:7185/api/profile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
    }).then((response) => {
        if (!response.ok) {
            console.error(`Server responded with ${response.status}: ${response.statusText}`);
            return response.text().then((text) => {
                console.error(text);
                throw new Error(`Server responded with ${response.status}`);
            });
        }
        return response.json();
    });
};

