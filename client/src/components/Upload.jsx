import { IKContext, IKUpload } from "imagekitio-react";
import { toast } from "react-toastify";
import { postService } from "../services/post.service";
import { useRef } from "react";

const Upload = ({ children, type, onSuccess, onProgress }) => {
  const ref = useRef(null);

  const onUploadError = (err) => {
    console.log(err);
    toast.error("Image upload failed.");
  };
  const onUploadSuccess = (res) => {
    onSuccess(res);
  };
  const onUploadProgress = (progress) => {
    onProgress(Math.round((progress.loaded / progress.total) * 100));
  };

  return (
    <IKContext
      publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      authenticator={postService.authenticator}
    >
      <IKUpload
        useUniqueFileName
        onError={onUploadError}
        onSuccess={onUploadSuccess}
        onUploadProgress={onUploadProgress}
        className="hidden"
        ref={ref}
        accept={`${type}/*`}
      />
      <div className="cursor-pointer" onClick={() => ref.current.click()}>
        {children}
      </div>
    </IKContext>
  );
};

export default Upload;
