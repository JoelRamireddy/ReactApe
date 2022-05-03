const Term = (props) => {
  const courseList = props.data;

  let courses = Object.entries(courseList).map(([key, value]) => {
    const courseName = key + " " + props.catalog.courses[key].name;
    return <p>{courseName}</p>;
  });

  return (
    <div class="card">
      <div className="semHeader">
        {props.term} {props.year}
      </div>
      {courses}
    </div>
  );
};
export default Term;
