import matter from "gray-matter";
import Reactmarkdown from "react-markdown";
import SideNav from "../../../components/sideNav/Sidenav";
import { useRouter } from "next/router";
import styles from "../../../pages/docs.module.scss";

function Docs({ data }) {
  //extracting real data from data using gray-matter package
  const realData = data.map((docs) => matter(docs));
  //then we map over these real data to get what is inside this freaking object
  const unSortedDocs = realData.map((docs) => docs.data);

  //sorting docs
  const docs = unSortedDocs.sort((a, b) => {
    return a.order - b.order;
  });

  const router = useRouter();
  const { slug } = router.query;

  let wantedData;
  realData.forEach((element) => {
    if (element.data.slug === slug) {
      wantedData = element;
    }
  });

  const docToBeShown = wantedData;

  return (
    <div>
      <SideNav docs={docs} currentlyOpenedSlug={slug} />
      <div className={styles.docsPageLayout}>
        <div className={styles.docsMainLayout}>
          <Reactmarkdown escapeHtml={false}>
            {docToBeShown.content}
          </Reactmarkdown>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const fs = require("fs");
  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");
  const docs = files.filter((func) => func.endsWith(".md"));
  const data = docs.map((doc) => {
    const path = `${process.cwd()}/content/${doc}`;
    const rawContent = fs.readFileSync(path, { encoding: "utf-8" });

    return rawContent;
  });

  return {
    props: { data: data },
  };
}

export default Docs;
