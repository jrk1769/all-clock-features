const FooterBtn = props => {
    return (
    <>
        <div className={props.class}>
            <button onClick={props.handleClick ? props.handleClick : () => {}}>{props.value}</button>
        </div>
    </>)
}

export default FooterBtn;