export default function (context) {
  console.log('[MIddelware] check initauth')
  if (process.client){
      context.store.dispatch("initAuth", context.req);
  }
}
