import type { ComponentChildren } from 'preact';

function Subtitle(props: { children?: ComponentChildren }) {
  const { children } = props;
  return (
    <h2 className="mb-12 text-2xl font-bold dark:text-white">{children}</h2>
  );
}

export default Subtitle;
