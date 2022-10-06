import api from '../../utils/api/api';

const handler = api().get(async (_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ status: 'ok', data: 'Pong!' }));
});

export default handler;
