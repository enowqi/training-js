console.log(12345%7)
function 余り(x,y){
    return x%y
}
function Quiz2() {
    return (
        <>
            <h1 className="slide">
                {余り(12345,7)}
                <br />
                hello
            </h1>
        </>
    )
};

export default Quiz2;