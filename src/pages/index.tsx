import Link from "next/link";
import {
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { client } from "../libs/client";
import type {BlogData} from "../types/blog";

type Props = {
  blog: BlogData[]
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blog
}: Props) => {
  return (
    <main>
      <div>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                {blog.title}
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