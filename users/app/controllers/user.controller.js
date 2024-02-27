
export async function getUsers(ctx){
  let response = {}
  const axios = ctx.$axios

  try{
    response = await axios.$get('/users')
    return response
  }catch (error){
    console.error("error al consultar el Api")
  }
}
