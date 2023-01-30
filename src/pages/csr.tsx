import useSWR from "swr";
import axios from "axios";
import {client} from "../libs/client"
import { useRouter } from 'next/router';

const fetcher = async (context: any) => {
  const {slug, draftKey} = context.query;
  const data = await client.get({
    endpoint: "blog",
    contentId: slug,
    queries: { draftKey: draftKey }
  });
  return data;
}

export default function CSR() {
  const router = useRouter();
  const {data, error} = useSWR(router, fetcher);

  if(error) return "An error has occured";
  if(!data) return "Loading ...";

  return (
    <main>
      <h1>プレビュー</h1>
      <div>
        <p>id: {data.id}をゲット</p>
        <p>title: {data.title}をゲット</p>
        <p>body: {data.body}をゲット</p>
        <img src={data.img.url}/>
      </div>
    </main>
  );
}