export default function UserPic(props) {
  const { src, style } = props;
  return <img src={src} className={`bg-slate-500 rounded-full ${style}`} />;
}
