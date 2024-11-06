import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/vps---hetzner"
          >
            Documentación técnica
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div className={clsx("col col--12")}>
          <div className={"text--center " + styles.margins}>
            <h1>
              Nos dedicamos a arreglas los peores escenarios y caidas de
              WordPress.
            </h1>
            <p>
              Si tienes un problema con tu WordPress, nosotros te ayudamos a
              solucionarlo.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
