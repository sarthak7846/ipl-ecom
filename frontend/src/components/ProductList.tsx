import Card from "./Card";
export type ProductType = {
  id: string;
  image: string;
  title: string;
  price: number;
  mrp: number;
};

const ProductList = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="flex justify-center flex-wrap mt-4">
      {products.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          mrp={item.mrp}
        />
      ))}
    </div>
  );
};

export default ProductList;
