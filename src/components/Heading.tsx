import type { ComponentChildren } from 'preact';

function Heading(props: { title?: string; children?: ComponentChildren }) {
  const { children } = props;
  return <h3 className="text-xl font-bold dark:text-white">{children}</h3>;
}

export default Heading;
