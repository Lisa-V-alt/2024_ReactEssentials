export default function Tabs({children, buttons, ButtonsContainer = 'menu'}){ //ButtonsContainer - set custom wrapping element that can be altered elsewhere in code. string - '...'. custom component has to be imported, written with no apostrophes
    return<>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
    </>
}