const DisplayLoader = () => {
  return (
    <div
      id="loading-animation"
      style={{
        backgroundColor: "#ffffff",
        zIndex: 9999,
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0.4,
      }}
    >
      <div class="circles m-auto" style={{ top: "calc(50% - 75px)" }}></div>
    </div>
  );
};

export default DisplayLoader;
