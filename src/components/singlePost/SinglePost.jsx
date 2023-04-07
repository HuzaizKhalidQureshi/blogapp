import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyIdl3mAGWUkbe_2CI7nlB-8WubeQ8YJNAd9YJyGDlw&s"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Huzaiz</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum optio
          nesciunt fugiat, maxime non aut officiis nostrum natus porro aperiam,
          deserunt nam ad recusandae. Assumenda voluptas odit nobis eaque? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Illum optio
          nesciunt fugiat, maxime non aut officiis nostrum natus porro aperiam,
          deserunt nam ad recusandae. Assumenda voluptas odit nobis eaque? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Illum optio
          nesciunt fugiat, maxime non aut officiis nostrum natus porro aperiam,
          deserunt nam ad recusandae. Assumenda voluptas odit nobis eaque?
        </p>
      </div>
    </div>
  );
}
