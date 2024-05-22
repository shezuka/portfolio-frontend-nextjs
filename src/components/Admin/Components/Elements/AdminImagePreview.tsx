import { useInput } from "ra-core";
import { getBackendHostname } from "@/lib/hostname";

type AdminImageProps = {
  source: string;
  basePath: string;
};

const AdminImage = ({ source, basePath }: AdminImageProps) => {
  const input = useInput({ source });

  if (!input || !input.field || !input.field.value) return null;

  return (
    <img
      src={`${getBackendHostname()}/api/${basePath}/${input.field.value}`}
      alt="Project Image"
      style={{ maxWidth: "200px", maxHeight: "200px" }}
    />
  );
};

export default AdminImage;
