function Card({ title, desc, profile }) {
  return (
    <>
      <div className="card h-100 shadow border-0">
        <img
          src={profile}
          alt="No Image"
          height={250}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{title || "NA"} </h5>
          <p className="card-title">{desc || "NA"} </p>
        </div>
      </div>
    </>
  );
}


export default Card