import { AuthenticatedTemplate, useIsAuthenticated } from "@azure/msal-react";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

// AuthenticatedTemplate that takes temporary users into consideration
const CustomAuthenticatedTemplate = ({ children }: Props) => {
    const isTemporaryUser = localStorage.getItem('temporaryUser') !== null;
    const isAuthenticated = useIsAuthenticated();
    return (
        <>
            <AuthenticatedTemplate>{children}</AuthenticatedTemplate>
            {isTemporaryUser && !isAuthenticated && children}
        </>
    )
}

export default CustomAuthenticatedTemplate