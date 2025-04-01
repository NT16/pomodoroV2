export default function About() {
  return (
    <div className="about">
      <h3 className="page-headings">About</h3>
      <div>
        <div className="line-height-8 mt-32">
          <p>
            <span className="bold moccasin-bg">"Pomodoro"</span> is a
            productivity app.
          </p>
          <p>Divide your work into</p>
          <p className="wrap-long-text">
            25 minutes slot followed by 5 minutes break
          </p>
          <p>(* Repeat 3 more times)</p>
          <p>Finish 1 set with a 15 minutes break. </p>
        </div>
        <p className="bold my-16">Or </p>
        <p>
          Customise your work/ short break/ long break duration in{" "}
          <span className="bold">"Settings" </span>
          tab
        </p>
      </div>

      <div className="mt-48">
        <span className="bold moccasin-bg p-8">App Built using:</span>
        <ul>
          <li>ReactJS (React Hooks)</li>
          <li>React Router</li>
        </ul>
      </div>
    </div>
  );
}
