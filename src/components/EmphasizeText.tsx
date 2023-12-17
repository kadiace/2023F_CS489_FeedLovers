function EmphasizeText(props: { message: string }) {
  const { message } = props;
  return (
    <span style={{ color: '#ff0000', fontWeight: 'bold' }}>{message}</span>
  );
}

export default EmphasizeText;
