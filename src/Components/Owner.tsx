type OwnerProps = {
    name: {
        first: string;
        middle: string;
        last: string;
    };
}


export const Owner = (props: OwnerProps) => {
    return (
        <div>
            <h2>Site owner</h2>
            <p>{props.name.first} {props.name.middle} {props.name.last}</p>
        </div>
    );
}