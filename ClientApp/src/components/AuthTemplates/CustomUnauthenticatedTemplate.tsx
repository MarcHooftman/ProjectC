import { UnauthenticatedTemplate } from "@azure/msal-react";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

// AuthenticatedTemplate that takes temporary users into consideration
const CustomUnauthenticatedTemplate = ({ children }: Props) => {
  const isTemporaryUser = localStorage.getItem("temporaryUser") !== null;
  return (
    <div role="unauth-template">
      {!isTemporaryUser && (
        <UnauthenticatedTemplate>{children}</UnauthenticatedTemplate>
      )}
    </div>
  );
};

export default CustomUnauthenticatedTemplate;
