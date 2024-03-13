import Homepage_Intro from "../Components/Homepage_Intro";
import Homepage_article from "../Components/Homepage_article";
import Homepage_description from "../Components/Homepage_description";
import Homepage_image from "../Components/Homepage_image";

const HomePage = () => {
  return (
    <div>
      <>
        <Homepage_image />
      </>

      <>
        <Homepage_Intro />
      </>

      <>
        <Homepage_article />
      </>

      <>
        <Homepage_description />
      </>
    </div>
  );
};

export default HomePage;
