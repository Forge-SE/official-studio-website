const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-start py-36">
        <h2 className="text-5xl">{title}</h2>
        <p className="sub text-lg">{description}</p>
      </div>
    </div>
  );
};
export default ServiceCard;
