import { NextApiRequest, NextApiResponse } from 'next';
import nc, { NextConnect } from 'next-connect';
import { AxiosError } from 'axios';

const api = <T = unknown>(): NextConnect<NextApiRequest, NextApiResponse<T>> =>
  nc<NextApiRequest, NextApiResponse>({
    onError: (err: AxiosError, _, res) => {
      res.writeHead(err.response?.status ?? 500);
      res.end(err.response?.data);
    },
    onNoMatch: (req, res) => {
      res.writeHead(405);
      res.end(`Method ${req.method ?? ''} Not Allowed`);
    }
  });

export default api;
