import moment from "moment";
import Image from "../../../components/Image";

const Comment = ({ comment }) => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl">
      <div className="flex items-center gap-4">
        <Image
          src={comment.user.profileImage || "userImg.jpeg"}
          alt={comment.user.username}
          width="40"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-medium">{comment.user.username}</span>
        <span className="text-sm">{moment(comment.createdAt).fromNow()}</span>
      </div>
      <div className="mt-4">
        <p>{comment.description}</p>
      </div>
    </div>
  );
};

export default Comment;
