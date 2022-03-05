export default function Card(props) {
  const { style } = props;
  return (
    <div className={`w-full h-full flex flex-col rounded-lg ${style}`}>
      {props.children}
    </div>
  );
}
