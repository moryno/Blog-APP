import { IKImage } from "imagekitio-react";

const Image = ({ src, alt, className, width, height }) => {
  console.log(import.meta.env.VITE_IK_URL_ENDPOINT);

  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Image;
