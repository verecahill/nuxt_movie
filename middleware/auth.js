export default function(context){
    console.log('[MIddelware] check isAuthenticated')
    if(!context.store.getters.isAuthenticated){
        context.redirect('/admin/auth')
    }
}