export default function UserPic(props) {
  const { src, _style } = props;
  return (
    <img
      src={src}
      className={`bg-slate-500 rounded-full ${_style}`}
      alt='User'
    />
  );
}
