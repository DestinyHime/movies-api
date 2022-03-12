import Logo from "../Components/header/logo";
import NavMenu from "../Components/header/navMenu.js";
import PostersGrid from "../Components/Posters/postersGrid.js";
import UserInfo from "../Components/UserInfo/userInfo.js";
import Footer from "../Components/Footer/footer.js";
export default function Home() {
  //search component

  return (
    <div>
      <header className="header">
        <Logo></Logo>
        <NavMenu></NavMenu>
      </header>
      <UserInfo></UserInfo>
      <PostersGrid></PostersGrid>
      <Footer></Footer>
    </div>
  );
}
