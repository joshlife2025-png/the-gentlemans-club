import jwt from 'jsonwebtoken'
const SECRET = process.env.JWT_SECRET || 'devsecret'

export function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '30d' })
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET)
  } catch (e) {
    return null
  }
}
