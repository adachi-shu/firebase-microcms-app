import Link from "next/link";
import {
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { client } from "../libs/client";
import type {BlogData} from "../types/blog";
import '../styles/Home.module.css';
import Image from "next/image";
import img from "../public/img.png";


type Props = {
  blog: BlogData[]
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blog
}: Props) => {
  console.log(blog)
  return (
    <main>
      <div>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id} className="text-3xl font-bold underline text-blue-700">
              <Link href={`/blog/${blog.id}`}>
                {blog.title}
                <img src={blog.img.url} className="w-11"/>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};


export default Home;