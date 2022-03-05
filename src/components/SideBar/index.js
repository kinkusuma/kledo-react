function SideBar(props) {
  return (
    <nav className='w-full md:w-48 border-r border-slate-400  border-opacity-50'>
      {props.children}
    </nav>
  );
}

function Items(props) {
  return (
    <div className='w-full h-full grid grid-flow-row'>{props.children}</div>
  );
}

function Item(props) {
  const { hover, _style } = props;
  return (
    <button
      className={`w-full p-3 ${_style} ${hover ? "hover:bg-slate-100" : ""}`}
    >
      {props.children}
    </button>
  );
}

SideBar.Items = Items;
SideBar.Item = Item;
export default SideBar;
