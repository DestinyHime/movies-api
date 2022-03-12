import Logo from "../Components/Header/logo";
import NavMenu from "../Components/Header/navMenu.js";
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
