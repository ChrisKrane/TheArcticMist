type ComponentTestProps = {
    name: string;
    testNumber: number;
    isLoggedIn: boolean;
}

export const ComponentTest = (props: ComponentTestProps) => {
    return (
        <div>
            <h1>This is my first react typescript page!</h1>
            {
                props.isLoggedIn ? <p>Welcome {props.name}! This is test nr.{props.testNumber}</p> 
                : <p>Not logged in!</p>
            }
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 100 100" 
                stroke-width="1.5" 
                stroke="currentColor" 
                className="w-1 h-1">
            <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>

        </div>
    );
}