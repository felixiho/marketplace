import { ChildrenProps } from "./types";

 
const BottomNav = ({ children }: ChildrenProps) => {
    return (
        <div>
            {children}
            Bottom Nav here
        </div>
    );
}
 

export default BottomNav;