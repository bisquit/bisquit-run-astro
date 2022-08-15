function Title(props: { title?: string }) {
  const { title } = props;
  return (
    <h1 className="mb-20 text-3xl font-bold dark:text-white"># {title}</h1>
  );
}

export default Title;
