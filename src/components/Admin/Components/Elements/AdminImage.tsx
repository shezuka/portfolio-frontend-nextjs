import { useRecordContext } from "ra-core";

type AdminImageProps = {
  source: string;
  basePath: string;
};

const AdminImage = ({ source, basePath }: AdminImageProps) => {
  const record = useRecordContext();

  if (!record || !record[source]) return null;

  return (
    <img
      src={`/api/${basePath}/${record[source]}`}
      alt="Project Image"
      style={{ maxWidth: "200px", maxHeight: "200px" }}
    />
  );
};

export default AdminImage;
