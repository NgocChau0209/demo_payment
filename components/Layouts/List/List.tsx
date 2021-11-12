export function List ({list,children}){
    return(
        <>
        {list.map((item,key)=>{
            return {children}
        })}
        </>
    )
}