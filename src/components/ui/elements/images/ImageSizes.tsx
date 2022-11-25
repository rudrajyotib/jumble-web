const sizeMap: Map<string, string> = new Map<string, string>();
sizeMap.set('banner', `
    @media (max-width:400px){
        width:380px;
        height:200px;
    }

    @media (min-width: 401px) and  (max-width:600px){
        width:400px;
       
        height:400px;
    }
    
    @media (min-width: 601px){
        width:600px;
       
        height:600px;
    }
    `)


function ImagesSizes(size: string): string {

    if (sizeMap.has(size)) {
        return sizeMap.get(size)! + ''
    }
    return ''
}


export default ImagesSizes