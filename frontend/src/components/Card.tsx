const Card = ({
  title,
  image,
  price,
  mrp,
}: {
  title: string;
  image: string;
  price: number;
  mrp: number;
}) => {
  const discount = Math.floor(((mrp - price) / mrp) * 100);

  return (
    <div className="flex flex-col mx-2 my-2 shadow-md rounded-[10px] overflow-hidden bg-slate-100 cursor-pointer">
      <div className="bg-slate-200">
        <img className="object-cover  w-64 h-80" src={image} alt="product" />
      </div>

      <div className="border border-t-[1px] border-slate-100 border-b-0 border-l-0 border-r-0 px-2">
        <p
          className="text-slate-600 py-1 truncate max-w-56 font-semibold"
          style={{ fontFamily: "Nunito" }}
        >
          {title}
        </p>
        <div className="flex justify-start items-center pb-2">
          <p className="text-xl font-bold">₹{price}</p>

          {mrp !== price && (
            <>
              <p className="px-1 line-through text-slate-400">₹{mrp}</p>
              <div className="w-[1px] h-4 bg-slate-600 mx-1" />
              <p className="text-[#008944] font-bold">{discount}% off</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
