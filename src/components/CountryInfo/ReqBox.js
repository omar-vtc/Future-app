function ReqBox() {
  return (
    <div className="req-box">
      <div className="icon-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-file-earmark-text"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
          <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
        </svg>
        <h4>Certificate</h4>
      </div>
      <div className="req-desc">
        <p>Display posts types within a customizable slideshow</p>
        <button className="btn btn-box btn-outline-dark">VIEW EXAMPLE</button>
      </div>
    </div>
  );
}

export default ReqBox;
