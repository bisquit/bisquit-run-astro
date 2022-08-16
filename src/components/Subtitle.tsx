import type { ComponentChildren } from 'preact';

function Subtitle(props: { children?: ComponentChildren }) {
  const { children } = props;
  return <h2 className="mb-12 text-2xl font-bold">{children}</h2>;
}

export default Subtitle;
