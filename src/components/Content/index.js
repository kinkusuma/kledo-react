export default function Content(props) {
  return (
    <div className={`w-full flex flex-grow ${props._style}`}>
      {props.children}
    </div>
  );
}
