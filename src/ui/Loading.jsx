import { CirclesWithBar } from "react-loader-spinner";

const Loading = () => {
  return (
    <CirclesWithBar
      height="100"
      width="100"
      color="#4fa94d"
      outerCircleColor="var(--Red)"
      innerCircleColor="#4fa94d"
      barColor="var(--Red)"
      ariaLabel="circles-with-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loading;
