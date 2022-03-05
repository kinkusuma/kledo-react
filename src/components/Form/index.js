function Form(props) {
  const { onSubmit } = props;
  return (
    <form
      className='w-full h-full flex flex-col items-center justify-center'
      onSubmit={onSubmit}
    >
      {props.children}
    </form>
  );
}

function Input(props) {
  const { type, placeholder, onChange, formHook } = props;
  return (
    <input
      className='w-full p-1 border border-slate-400 rounded-md'
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      {...formHook}
    />
  );
}

function Label(props) {
  return <label className='w-full py-1'>{props.children}</label>;
}

function Submit(props) {
  return (
    <button
      className='w-full m-3 p-1 font-bold text-white rounded-full bg-blue-600'
      type='submit'
    >
      {props.children}
    </button>
  );
}

Form.Input = Input;
Form.Label = Label;
Form.Submit = Submit;
export default Form;
