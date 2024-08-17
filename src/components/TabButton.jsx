export default function TabButton({children, onSelect}){
    console.log('TABBUTTON COMPONENT EXECUTING'); //logs in console, checks if buttons function (if state/hooks not operating)
    return( 
    <li>
    <button onClick={onSelect}>{children}</button>
    </li>
    );
}