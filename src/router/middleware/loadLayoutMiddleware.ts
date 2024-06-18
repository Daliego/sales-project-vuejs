
export async function loadLayoutMiddleware (route) {
    console.log("i runned")
    try {
        let layout = route.meta.layout
        console.log(layout);
        
        let layoutComponent = await import(`@/layouts/${layout}.vue`)
        console.log(layoutComponent);
        
        route.meta.layoutComponent = layoutComponent.default
    } catch (e) {
        console.error('Error occurred in processing of layouts: ', e)
        console.log('Mounted default layout AppLayoutDefault')
        let layout = 'AppLayoutDefault'
        let layoutComponent = await import(`@/layouts/${layout}.vue`)
        route.meta.layoutComponent = layoutComponent.default
    }
}