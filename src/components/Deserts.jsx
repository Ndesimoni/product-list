import { useQuery } from "@tanstack/react-query";
import { Heading } from "../utils/Styles";
import Items from "./Items";
import { getAllItems } from "../utils/DATA-BASE/DATA-BASE-api";

// const Main = styled.main`
//   background-color: green;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
const array = [
  {
    thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
    mobile: "./assets/images/image-macaron-mobile.jpg",
    tablet: "./assets/images/image-macaron-tablet.jpg",
    desktop: "./assets/images/image-macaron-desktop.jpg",
  },
  {
    thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
    mobile: "./assets/images/image-macaron-mobile.jpg",
    tablet: "./assets/images/image-macaron-tablet.jpg",
    desktop: "./assets/images/image-macaron-desktop.jpg",
  },
  {
    thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
    mobile: "./assets/images/image-macaron-mobile.jpg",
    tablet: "./assets/images/image-macaron-tablet.jpg",
    desktop: "./assets/images/image-macaron-desktop.jpg",
  },
  {
    thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
    mobile: "./assets/images/image-macaron-mobile.jpg",
    tablet: "./assets/images/image-macaron-tablet.jpg",
    desktop: "./assets/images/image-macaron-desktop.jpg",
  },
];

const Deserts = () => {
  const { data: desserts, isLoading } = useQuery({
    queryKey: ["Product-list"],
    queryFn: getAllItems,
  });

  console.log(typeof desserts);
  console.log(desserts);
  console.log(array);

  return (
    <div>
      <Heading>Desserts</Heading>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {/* {desserts.map((dessert) => (
          <Items key={dessert.id} dessert={dessert} />
        ))} */}

        {/* {desserts.map((dessert) => (
          <Items key={dessert.id} />
        ))} */}

        {/* {array.map((dessert) => (
          <Items key={dessert.mobile} />
        ))} */}
      </div>
    </div>
  );
};

export default Deserts;
