export default function HeroBikeNav({ index,item,setIndex }) {
  return (
    <span className={index === item ? "active" : ""} onClick={() => setIndex(item)}>
      0{item+1}{index === item && <hr />}
    </span>
  );
}
