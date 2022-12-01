const StartSteps = ({ number, text }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      margin: "15px",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        width: "70px",
        height: "70px",
        borderRadius: "24px",
        background: "#323F5D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "15px",
      }}
    >
      <p style={{ fontWeight: "bolder", fontSize: "20px", color: "white" }}>
        {number}
      </p>
    </div>
    <p style={{ flex: "1", fontSize: "18px", color: "#B0B0B0" }}>{text}</p>
  </div>
);

export default StartSteps;
