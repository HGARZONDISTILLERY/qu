import Home from '.';
import {render} from '../../../../setupTests'

test('Home component renders correctly', () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
});
