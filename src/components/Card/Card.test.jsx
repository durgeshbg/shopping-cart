import { render } from '@testing-library/react';
import { expect, it } from 'vitest';
import Card from './Card';

it('Card Mount', () => {
  const mockData = {
    title: 'title',
    category: 'category',
    image: 'image',
    price: 0,
    rating: { rate: 5, count: 200 },
  };

  const { container } = render(<Card {...mockData} />);

  const title = container.querySelector('.title');
  expect(title.textContent).toMatch('title');

  const category = container.querySelector('.category');
  expect(category.textContent).toMatch('category');

  const image = container.querySelector('img');
  expect(image.src).toMatch('image');

  const price = container.querySelector('.price');
  expect(price.textContent).toMatch('0 $');
});
