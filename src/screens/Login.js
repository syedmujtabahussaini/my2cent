function Login() {
  return (
    <>
      <div className="  absolute top-0 h-full w-full">
        <div className=" flex h-[80%] w-[75%]">
          <img src="./images/login-blue-waves.65b89c99969fa9c8c4992e0772a29fa8.png" />
          <svg
            className=" absolute left-[35.5%] top-[4rem]"
            width="40"
            height="38"
            fill="none"
          >
            <path
              fill="#fff"
              d="m31.074 8.72-.542 4.026c-1.187-.103-2.13.103-2.826.62-.697.49-1.174 1.2-1.433 2.129-.232.903-.284 1.935-.154 3.097h4.955v9.95h-9.563V18.205c0-3.381.8-5.936 2.4-7.666 1.601-1.729 3.988-2.336 7.163-1.82Zm-12.97 0-.541 4.026c-1.188-.103-2.13.103-2.827.62-.697.49-1.174 1.2-1.432 2.129-.232.903-.284 1.935-.155 3.097h4.956v9.95H8.542V18.205c0-3.381.8-5.936 2.4-7.666 1.6-1.729 3.988-2.336 7.163-1.82Z"
            ></path>
          </svg>
          <span className="absolute text-[2rem] left-[36%] top-[8rem] w-[395px] text-white leading-10">
            To start immediately earning for your content, join my2cents for
            free.
          </span>
        </div>
        <div className=" flex justify-center items-center absolute   top-[150px] left-[202px] ">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
            className="absolute w-[582px] h-[370px] mb-4 ml-2 "
          />
          <img src="./images/empty-comp.png" />
        </div>
      </div>
    </>
  );
}

export default Login;
