export default function About() {
  return (
    <div class="about">
      <h3 className="page-headings">About</h3>
      <div>
        <p>"Pomodoro" is a productivity app.</p>
        <p>Divide your work into</p>
        <p>
          25 minutes slot followed by 5 minutes break (* Repeat 3 more times)
        </p>
        <p>Finish 1 set with a 15 minutes break. </p>
        <p class="bold my-16">Or </p>
        <p>
          Customise your work/ short break/ long break duration in{" "}
          <span>"Settings"</span>
          tab
        </p>
      </div>

      <p class="mt-48">
        <span class="bold">App Built using:</span>
        <ul>
          <li>ReactJS (React Hooks)</li>
          <li>React Router</li>
        </ul>
      </p>
    </div>
  );
}
