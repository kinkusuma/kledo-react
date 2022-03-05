export default function Card(props) {
  const { _style } = props;
  return (
    <div className={`w-full h-full flex flex-col rounded-lg ${_style}`}>
      {props.children}
    </div>
  );
}
