import { capitalizeFirstLetter } from './utils';

describe('capitalizeFirstLetter', () => {
  it('should work', () => {
    expect(
      capitalizeFirstLetter('so long and thanks for all the fish!')
    ).toEqual('So long and thanks for all the fish!');
  });
});
