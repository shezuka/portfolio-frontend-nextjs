import { useRecordContext } from "ra-core";

type AdminImageProps = {
  source: string;
  basePath: string;
};

const AdminImageUrl = ({ source, basePath }: AdminImageProps) => {
  const record = useRecordContext();

  if (!record || !record[source]) return null;

  return (
    <a
      href={`/api/${basePath}/${record[source]}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      Open in separated tab
    </a>
  );
};

export default AdminImageUrl;
