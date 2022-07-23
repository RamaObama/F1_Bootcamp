function StudentInfo() {
  return (
    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div className="card p-4">
        <div className=" image d-flex flex-column justify-content-center align-items-center">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" height="100" width="100"></img>
          <span className="name mt-3">Rasuli Ramin 28 y.o.</span>
          <span className="idd">@deltajed</span>
          <div className="text mt-3">
            <p>Student of school 21 from Sber.</p>
          </div>
          <div className=" px-2 rounded mt-4 date "><span className="join">Joined 26 April, 2022</span></div>
        </div>
      </div>
    </div>
  );
}

export default StudentInfo;
