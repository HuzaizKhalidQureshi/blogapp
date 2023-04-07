import "./post.css";

export default function post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        nesciunt deleniti? Est tempore nemo voluptatem sed adipisci, magni
        deleniti, inventore error voluptatibus ipsum eveniet iusto quod
        veritatis sapiente id vitae?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Exercitationem, nesciunt deleniti? Est tempore nemo
        voluptatem sed adipisci, magni deleniti, inventore error voluptatibus
        ipsum eveniet iusto quod veritatis sapiente id vitae?Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Exercitationem, nesciunt
        deleniti? Est tempore nemo voluptatem sed adipisci, magni deleniti,
        inventore error voluptatibus ipsum eveniet iusto quod veritatis sapiente
        id vitae?Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem, nesciunt deleniti? Est tempore nemo voluptatem sed
        adipisci, magni deleniti, inventore error voluptatibus ipsum eveniet
        iusto quod veritatis sapiente id vitae?
      </p>
    </div>
  );
}
