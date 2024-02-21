import CircleAnim2 from "../images/icons/circle-anim-2";

function Loading({ status }) {
  return (
    <div className="loading">
      <div>
        <div className="spinner-container">
          <CircleAnim2 />
        </div>
        <h1>Please Wait...{status}</h1>
      </div>
    </div>
  );
}
export default Loading;
