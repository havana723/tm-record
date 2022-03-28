interface Props {
  src: string;
}

const LogoImg: React.FC<Props> = (props) => {
  return (
    <a href="https://github.com/PngWnA/TFM.log">
      <img
        src={props.src}
        style={{
          width: "200px",
          margin: "50px auto",
          display: "block",
          borderRadius: "50%",
        }}
        className="animated rollIn"
      />
    </a>
  );
};

export default LogoImg;
