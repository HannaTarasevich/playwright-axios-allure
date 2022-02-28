import { test } from '@playwright/test';
import { expect } from 'chai';
import axios from 'axios';

test.describe('API tests', () => {
  test('should allow me to add todo items', async () => {
    const response = await axios.get('https://cat-fact.herokuapp.com/facts');
    expect(response.data.length).to.equal(5, 'Error!');
  });
});
