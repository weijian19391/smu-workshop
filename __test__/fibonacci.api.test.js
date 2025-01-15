import axios from 'axios';

describe('POST /api/check-fibonacci', () => {
  const url = `http://localhost:3888/api/check-fibonacci`;

  it('should return true for a valid Fibonacci sequence', async () => {
    const response = await axios.post(url, {
      sequence: [0, 1, 1, 2, 3, 5, 8],
    });
    expect(response.status).toBe(200);
    expect(response.data).toStrictEqual({ isFibonacci: true });
  });
});
