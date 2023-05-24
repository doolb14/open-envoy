import "./style.css";

const font_variants = { title: 16, subtitle: 14, header: 12, detail: 14 };

const OEText = ({
  children,
  side_text,
  style,
  variant = "title",
  ...props
}) => {
  return (
    <>
      <span {...props} style={{ ...style, fontSize: font_variants[variant] }}>
        {children}
      </span>
      {side_text ? <span className="Side-text">{" " + side_text}</span> : null}
    </>
  );
};

export default OEText;
