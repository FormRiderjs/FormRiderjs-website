import matter, { read } from "gray-matter";

import SideNav from "../components/sideNav/Sidenav";
import styles from "./docs.module.scss";
function Docs({ data }) {
  const realData = data.map((blog) => matter(blog));
  const listItems = realData.map((listItem) => listItem.data);


  console.log(listItems);

  return (
    <div>
      <SideNav titles={listItems} />
      <div className={styles.docsPageLayout}>
        <div className={styles.docsMainLayout}>
        This is the main layout
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");
  const blogs = files.filter((fn) => fn.endsWith(".md"));
  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, { encoding: "utf-8" });
    return rawContent;
  });
  return {
    props: {
      data: data,
    },
  };
}

export default Docs;
