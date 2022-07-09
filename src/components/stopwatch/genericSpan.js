import './Stopwatch.css';

export default function GenericSpan(props) {
    return (<span 
        className={props.className}
        onClick={props.handleClick ? props.handleClick : () => console.log("NA")}
    >{props.text}
    </span>);
}