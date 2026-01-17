export default function MemberName({ names, con }) {
  let content; 

  if (con == 1) {
    content = (
      <ul>
        {names.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  } else {
    content = <h1>Default data</h1>;
  }

  return content; // final return
}
