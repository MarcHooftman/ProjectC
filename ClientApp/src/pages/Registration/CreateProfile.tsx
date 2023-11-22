import { Spinner } from "react-bootstrap"
import { isLoggedIn } from "../../utils/isLoggedIn"
import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import IProfile from "../Profile/IProfile";
import IUser from "../../interfaces/IUser";

const CreateProfile = () => {
    const { email } = useParams();
    const [user, setUser] = useState<IUser>();
    const navigate = useNavigate();
    //const { loading, data } = useFetch(`https://localhost:7185/api/user/by-email/${email}`);

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://localhost:7185/api/user/by-email/${email}`)
                .then(response => response.json())
                .then(data => setUser(data))
                .catch(error => { throw new Error(error) })
                .finally(() => {
                    setTimeout(() => {
                        if (user) {
                            console.log(user)
                            localStorage.setItem("user", `${user.id}`);
                            const profile = {
                                UserID: user.id,
                                FullName: "Not set",
                                Bio: "Not set",
                                MemberSince: new Date().toISOString(),
                                LastLogin: new Date().toISOString(),
                                Role: "Not set",
                                DateOfBirth: "",
                                Department: "Not set",
                                PhoneNumber: "",
                            };

                            fetch("https://localhost:7185/api/profile", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(profile),
                            }).catch(error => { throw new Error(error) })

                            navigate("/profile")
                        }
                    }, 500)

                })
        }, 500)
    }, [user])

    return (
        <>
            <h1>Creating profile...</h1><Spinner></Spinner>
        </>
    )
}

export default CreateProfile