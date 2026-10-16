export function Badge({children,quiet=false}:{children:string;quiet?:boolean}){return <span className={quiet?'badge badge-quiet':'badge'}>{children}</span>}
