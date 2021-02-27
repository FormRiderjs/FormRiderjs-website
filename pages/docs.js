
import { useRouter } from "next/router";
//import styles is not being used, but if deleted all styles will be also deleted from the sub docs contents
import styles from "./docs.module.scss";
import {useEffect} from "react";

function Docs() {
  const router = useRouter();
  console.log({router});

  const pathName = router.pathname;

  //redirect to /docs/introduction, this is only done after the component is mounted using useEffect
  useEffect(() => {
    if(pathName === "/docs"){
      router.push('/docs/introduction');
    }
  })

  return (
    <>

    </>
  );
}

export default Docs;
