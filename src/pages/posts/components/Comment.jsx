import Image from "../../../components/Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          alt="This is commentor avatar"
          width="40"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-medium">John Doe</span>
        <span className="text-sm">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply
          dummy text of the printing Lorem Ipsum is simply dummy text of the
          printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
          is simply dummy text of the printing Lorem Ipsum is simply dummy text
          of the printing Lorem Ipsum is simply dummy text of the printing Lorem
          Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy
          text of the printing Lorem Ipsum is simply dummy text of the printing
          Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply
          dummy text of the printing Lorem Ipsum is simply dummy text of the
          printing
        </p>
      </div>
    </div>
  );
};

export default Comment;
