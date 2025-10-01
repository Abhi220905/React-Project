import data from "../Layout/data";
import FunctCard from "../Layout/funcCompo/FunctCard";


const Fun_card = () => {
  return (
    <>
      <h1 className="text-center mt-5 text-capitalize mb-4">
        Card Design Using Function component
      </h1>
      <div className="container">
        <div className="row">
          {data.map((ele) => {
            return (
              <div className="col-lg-4 g-4 mb-3">
                <FunctCard title={ele.title} desc={ele.desc} profile={ele.profile} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};


export default Fun_card