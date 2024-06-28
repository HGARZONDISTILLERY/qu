import ModalJoke from '.';
import {render} from '../../../../setupTests'

test('ModalJoke component renders correctly', () => {
  const joke = {
    "id": "R7UfaahVfFd",
    "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
    "status": 200
  }

  const tree = render(

    <ModalJoke
      showDadJoke
      dadJokeIsLoading={false}
      renderError={() => <>Error</>}
      dadJokeError={'error'}
      open
      handleClose={() => console.log('close')}
      dadJokeData={joke}
      dadJokeRefetch={() => console.log('refetch')} />
      );
  expect(tree).toMatchSnapshot();
});