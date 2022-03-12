import Logo from "../Components/header/logo";
import NavMenu from "../Components/header/navMenu.js";
import PostersGrid from "../Components/Posters/postersGrid.js";
import UserInfo from "../Components/UserInfo/userInfo.js";
import Header from "../Components/header/header.js";
import Footer from "../Components/Footer/footer";
export default function Home() {
  //search component

  return (
    <div>
      <Header></Header>
      <UserInfo></UserInfo>
      <PostersGrid></PostersGrid>
      <Footer></Footer>
    </div>
  );
}
