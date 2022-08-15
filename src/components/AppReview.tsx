import Heading from './Heading';

function AppReview(props: { title?: string; url?: string; desc?: string }) {
  const { title, url, desc } = props;
  return (
    <section>
      <p className="mb-3 text-xl font-bold">- {title}</p>
      <a
        className="mb-3 inline-block text-amber-400 hover:text-amber-400/[.7]"
        href={url}
        target="_blank"
        rel="noreferrer noopener"
      >
        {url}
      </a>
      <p>{desc}</p>
    </section>
  );
}

export default AppReview;
