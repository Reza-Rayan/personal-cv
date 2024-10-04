interface ProductCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const ProductCard = ({ title, description, link, image }: ProductCardProps) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a href={link} className="btn btn-secondary">
            Go to website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
