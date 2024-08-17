export default function TabButton({children, isSelected, ...props}){
    console.log('TABBUTTON COMPONENT EXECUTING'); //logs in console, checks if buttons function (if state/hooks not operating)
    return( 
    <li>
    {/* button has active class if selected, no class if not selected: */}
    <button className ={isSelected ? 'active' : undefined} {...props}>{children}</button>
    </li>
    );
}