// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/api/protected-route.js
import { withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(function handler(req, res) {
  res.status(200).json({ text: 'SUCCESS' })
})
