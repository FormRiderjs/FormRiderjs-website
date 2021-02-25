import Head from "next/Head";

export default function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
      <meta name={"keywords"} content={keywords} />
      <meta name={"description"} content={description} />
      <meta charSet={'utf-8'}/>
      <link rel='icon' href='/favicon.ico'/>
      <title>{title}</title>
    </Head>
  );
}



Meta.defaultProps = {
    title : "Form Rider, a javascript form validation plugin, based on JSON",
    keywords : "Form, HTML forms, validation, plugin, javascript, sirage al dbiyat, open source, opensource, notification, library, plugin",
    description : "Validate HTML forms without typing other code than editing JSON and adding HTML attributes, with many validation functionalities such as required till regex and conditional validation"
}
