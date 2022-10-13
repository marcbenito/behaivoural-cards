import { render, screen } from '@testing-library/react';
// import { CardsContext } from "../cards/context/cards.context";

describe('CardUpdate', () => {
  it('Should call the context if no loaded', () => {
    const fakeContext = {
      loaded: false,
      getCards: jest.fn()
    };
    render(<div />);

    console.log(expect(screen.getByText('Loading...')));
    expect(fakeContext.getCards).toHaveBeenCalled();
  });
});
