import Button from ".";
import { render } from "../../../../setupTests";

test("Button component renders correctly", () => {
  const tree = render(
    <Button onClick={() => console.log("click")} buttonText="Test button" />,
  );
  expect(tree).toMatchSnapshot();
});
