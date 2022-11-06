import Navbar from "./navbar";
import NavbarTop from "./navbartop";

export default function Layout({ children }) {
  return (
    <>
    <NavbarTop></NavbarTop>
    <Navbar> </Navbar>
      <main>{children}</main>
    </>
  );
}
