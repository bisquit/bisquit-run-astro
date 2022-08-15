const BASE_SPACING = 4;

function Spacing(props: { x?: number }) {
  const { x = 1 } = props;
  const spacing = x * BASE_SPACING;
  return <div style={{ paddingBottom: spacing, paddingRight: spacing }}></div>;
}

export default Spacing;
