import { useFormField } from "../resources/hooks/index";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/cjs/Button.js";
import FormField from "../views/formField";

export default function Settings() {
  let navigate = useNavigate();

  const work = useFormField("number", "work");
  const shortBreak = useFormField("number", "shortBreak");
  const break2 = useFormField("number", "break2");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const data = {
      work: parseInt(event.target.work.value),
      shortBreak: parseInt(event.target.shortBreak.value),
      break2: parseInt(event.target.break2.value),
      save: event.target.save.checked,
    };

    navigate(
      `/?work=${data.work}&shortBreak=${data.shortBreak}&break2=${data.break2}&save=${data.save}`
    );
    // history.push({
    //   pathname: "/home",
    //   data,
    // });
  };

  return (
    <div className="container">
      <h3 className="page-headings">Set your own timers</h3>
      <p>mention all time duration in minutes...</p>
      <form
        onSubmit={onFormSubmit}
        className="form-container center-content"
        data-testid="form">
        <FormField id="work" label="Work" attributes={work} />
        <FormField
          id="shortBreak"
          label="Short Break"
          attributes={shortBreak}
        />
        <FormField id="break2" label="Break" attributes={break2} />
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input strong-border"
              type="checkbox"
              id="save"
            />
            <label className="form-check-label" htmlFor="save">
              Add to Favourites
            </label>
          </div>
        </div>
        <Button
          type="submit"
          variant="secondary"
          className="full-width my-auto btn-moccasin">
          Go
        </Button>
      </form>
    </div>
  );
}

/*

     <form
        onSubmit={onFormSubmit}
        className="form-container center-content"
        data-testid="form">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Set your own timers
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              mention all time duration in minutes...
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <FormField id="work" label="Work" attributes={work} />
              <FormField
                id="shortBreak"
                label="Short Break"
                attributes={shortBreak}
              />
              <FormField id="break2" label="Break" attributes={break2} />

              <div className="flex gap-3">
                <div className="flex h-6 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <input
                      id="save"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                    />
                    <svg
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                      viewBox="0 0 14 14"
                      fill="none">
                      <path
                        className="opacity-0 group-has-checked:opacity-100"
                        d="M3 8L6 11L11 3.5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        className="opacity-0 group-has-indeterminate:opacity-100"
                        d="M3 7H11"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-sm/6">
                  <label htmlFor="save" className="font-medium text-gray-900">
                    Add to Favourites
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm/6 font-semibold text-gray-900">
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Go
              </button>
            </div>
          </div>
        </div>
      </form>
*/
