import loadingGif from "../images/gif/loading-gear.gif";

export default function Loading() {
  return (
    <div className="loading">
      <h4>loading rooms data...</h4>
      <img src={loadingGif} />
    </div>
  );
}
