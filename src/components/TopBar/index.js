function TopBar(props) {
  return (
    <nav className='w-full h-12 px-5 grid grid-flow-col content-center bg-blue-600'>
      {props.children}
    </nav>
  );
}

function Items(props) {
  return (
    <div className='h-12 place-self-end flex items-center'>
      {props.children}
    </div>
  );
}

function Item(props) {
  return (
    <button
      className={`w-fit h-full flex items-center px-2 text-white ${
        props.hover ? "hover:bg-black" : ""
      }`}
    >
      {props.children}
    </button>
  );
}

TopBar.Items = Items;
TopBar.Item = Item;
export default TopBar;
