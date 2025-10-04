export const ColorfullMessag = ({ color, children}) => {
  // const { color, children } = props
  const contenStyleA = {
    // color: color,
    // 省略記法
    color,
    fontSize: '20px'
  };

  return (
    <p style={contenStyleA}>{children}</p>
  )
};