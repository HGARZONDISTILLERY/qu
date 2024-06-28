import CardJoke from ".";
import { render } from "../../../../setupTests";

test("CardJoke component renders correctly", () => {
  const joke = {
    type: "programming",
    setup: "Why do C# and Java developers keep breaking their keyboards?",
    punchline: "Because they use a strongly typed language.",
    id: 74,
  };

  const tree = render(<CardJoke joke={joke} />);
  expect(tree).toMatchSnapshot();
});
