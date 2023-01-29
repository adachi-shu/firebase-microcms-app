import axios from 'axios';

const Preview = (props) => {
  return (
    <main>
      <h1>プレビュー</h1>
      <div>
        <p>id: {props.id}をゲット</p>
        <p>title: {props.title}をゲット</p>
        <p>body: {props.body}をゲット</p>
        <img src={props.img}/>
      </div>
    </main>
  );
}

export default Preview;

export async function getServerSideProps(context) {
  const id = context.query.slug;
  const draftKey = context.query.draftKey;
  const {data} = await axios.get(`https://myblogadachi.microcms.io/api/v1/blog/${id}?draftKey=${draftKey}`, {headers: {"X-MICROCMS-API-KEY": process.env.API_KEY}})

  return {
    props: {
      id: data.id,
      title: data.title,
      body: data.body,
      img: data.img.url,
    },
  }
}