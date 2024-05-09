function StrSpTitle(props) {
  return (
    <div className={props.className}>
      <div className="float-right">
        <h4>{props.subtitle}</h4>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

export default StrSpTitle;
