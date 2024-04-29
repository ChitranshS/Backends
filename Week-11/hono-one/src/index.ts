import { Hono } from 'hono'

const app = new Hono()
async function authMiddleware(c:any,next:any)
{
  if (c.req.header('Authorization') == "Checker")
    {
    console.log("Worked")
    await next()
    }
}
// app.use(authMiddleware)
app.post('/',authMiddleware, async (c) => {
  // body , headers , query parameters , middlewares , connecting to databases
console.log(c.req.query('param'))
console.log(c.req.header('Authorization'))
const body = await c.req.json()
console.log(body)

return c.json({
  message:"Passed"
})
})


export default app
