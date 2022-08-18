import type { ComponentChildren } from 'preact';

function Subtitle(props: { sectionId?: string; children?: ComponentChildren }) {
  const { sectionId, children } = props;
  return sectionId ? (
    <a href={'#' + sectionId}>
      <h2 id={sectionId} className="mb-8 py-4 text-2xl font-bold">
        {children}
      </h2>
    </a>
  ) : (
    <h2 className="mb-8 py-4 text-2xl font-bold">{children}</h2>
  );
}

export default Subtitle;
