import { Container } from "reactstrap";
import NavMenu from "./NavMenu";
import NavMenu2 from "./NavMenu2";
import Footer from "./Footer";

interface Props {
    dark?: boolean;
    children?: any;
}

const Layout = ({ dark = false, children }: Props) => {
    return (
        <>

            <div className="bg-color pb-5">
                {dark ? <NavMenu /> : <NavMenu2 />}
                <Container tag="main" className="container">{children}</Container>
            </div>

            <div className="footer bottom-0 w-100">
                <Footer />
            </div>

        </>

    );
};

export default Layout;
