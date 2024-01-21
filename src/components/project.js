import Image from 'next/image';
import seoDesktop from '../../public/seoDesktop.PNG';
import styles from '../styles/project.module.css';
import Link from 'next/link';

const Project = () => {
  return (
    <div className={`${styles.project} flex-row flex-start`}>
      <div>
        <Link
          href='https://www.onpageseocheck.com/'
          target='_blank'
          rel='noreferrer'
        >
          <Image
            className={styles.img}
            src={seoDesktop}
            alt='onpageseocheck.com Image'
            width={600}
            height={350}
          />
        </Link>
      </div>
      <div>
        <a
          href='https://www.onpageseocheck.com/'
          target='_blank'
          rel='noreferrer'
        >
          <h2 className={styles.title}>onpageseocheck.com</h2>
        </a>
        <h5 className={styles.des}>
          This tool helps you analyze your webpage&apos; s basic SEO and give
          tips to improve your SEO. This is SPA built using next.js. Javascript
          library cheerio is used for scrapping webpages. SSR of next.js is
          used. A utility-first CSS framework(Tailwind) is applied for giving a
          smooth CSS look.
        </h5>
      </div>
    </div>
  );
};

export default Project;
