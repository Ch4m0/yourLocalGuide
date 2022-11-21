import Navbar from "./common/navbar";
import NavbarTop from "./common/navbartop";

export default function Layout({ children }) {

  const centered = {
      display: 'flex',
      justifyContent: 'center'
  }

  return (
    <>
      <NavbarTop></NavbarTop>
      <Navbar></Navbar>
      <main style={centered}>{children}</main>
    </>
  );
}
